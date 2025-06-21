import Sider from "../Dashboard/Sider";
import AddPropertyForm from "./Addproperty";

const AddPage = () => {
  return (
    <div className="flex">
      <Sider /> {/* Your existing sidebar */}
      <AddPropertyForm />
    </div>
  );
};
export default AddPage;