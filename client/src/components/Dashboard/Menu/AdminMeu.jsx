import MenuItem from "./MenuItem";
import {PiUserSwitch} from "react-icons/pi";

const AdminMeu = () => {
  return (
    <>
      <MenuItem
        icon={PiUserSwitch}
        label="Manage Users"
        address="manage-users"
      />
    </>
  );
};

export default AdminMeu;
