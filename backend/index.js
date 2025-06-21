const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://akhileshreddy811:Vin6zRDq4rpJTd5H@cluster0.maapd6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: {
  type: String,
  enum: ['Member', 'Admin'], // allows only 'Member' or 'Admin'
  default: 'Member'
}


});

const User = mongoose.model('User', UserSchema);

const updateSchema = new mongoose.Schema({
  name: String,
  message: String,
  time: String,
  date: String,
});

const Update = mongoose.model('Update', updateSchema);

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, "BANNU9", { expiresIn: '1h' });

    res.json({
      token,
      user: {
        name: user.username,
        email: user.email,
        role: user.role || "Member", // assuming role field exists
      }
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 📝 REGISTER ROUTE
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: "Member", // default role
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/update', async (req, res) => {
  try {
    const { name, message, time, date } = req.body;

    // Default to today's date if not provided
    const updateDate = date || new Date().toISOString().split('T')[0];

    const update = new Update({
      name,
      message,
      time,
      date: updateDate,
    });

    await update.save();
    res.status(201).json(update);
  } catch (err) {
    console.error("Error saving update:", err);
    res.status(500).json({ error: 'Failed to post update' });
  }
});


// GET all updates
app.get('/api/updates', async (req, res) => {
  try {
    const updates = await Update.find();
    res.json(updates);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch updates' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
