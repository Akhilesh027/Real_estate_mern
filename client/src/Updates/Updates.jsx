import React, { useEffect, useState } from "react";
import axios from "axios";

const Updates = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user")) || { name: "Guest", role: "Member" };
  const isAdmin = loggedInUser.role === "admin";

  const [updates, setUpdates] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const fetchUpdates = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/updates");
      setUpdates(res.data);
    } catch (err) {
      console.error("Error fetching updates:", err);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = now.toISOString().split("T")[0]; // YYYY-MM-DD

    const newUpdate = {
      name: loggedInUser.name,
      message: newMessage,
      time,
      date,
    };

    try {
      await axios.post("http://localhost:5000/api/update", newUpdate);
      setNewMessage("");
      fetchUpdates();
    } catch (err) {
      console.error("Error sending update:", err);
    }
  };

  const handleDownload = () => {
    const filtered = filterDate
      ? updates.filter((u) => u.date === filterDate)
      : updates;

    if (filtered.length === 0) {
      alert("No updates found for the selected date.");
      return;
    }

    const content = filtered
      .map((u) => `Name: ${u.name}\nMessage: ${u.message}\nTime: ${u.time}\nDate: ${u.date}\n\n`)
      .join("");

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `team_updates_${filterDate || "all"}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  return (
    <div className="mt-12">
      <h4 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4 flex items-center">
        <i className="fas fa-comments text-blue-500 mr-2"></i> Team Updates
      </h4>

      <div className="bg-white border rounded-lg shadow-md p-4 max-w-xl">
        <div className="h-64 overflow-y-auto space-y-4 mb-4" id="chatBox">
          {updates.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded ${
                msg.name === loggedInUser.name ? "bg-blue-50" : "bg-green-50"
              }`}
            >
              <p className="text-sm text-gray-700">
                <strong>{msg.name}:</strong> {msg.message}
              </p>
              <p className="text-xs text-gray-400 text-right">{msg.time} | {msg.date}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend}>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              name="message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </form>

        {isAdmin && (
          <div className="flex space-x-2 mt-2">
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            />
            <button
              type="button"
              onClick={handleDownload}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 text-sm"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Updates;
