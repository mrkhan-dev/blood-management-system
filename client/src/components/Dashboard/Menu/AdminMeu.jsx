import MenuItem from "./MenuItem";
import {PiUserSwitch} from "react-icons/pi";
import {BiRepost} from "react-icons/bi";

const AdminMeu = () => {
  return (
    <>
      <MenuItem
        icon={PiUserSwitch}
        label="Manage Users"
        address="manage-users"
      />
      <MenuItem icon={BiRepost} label="Manage Posts" address="manage-posts" />
    </>
  );
};

export default AdminMeu;
