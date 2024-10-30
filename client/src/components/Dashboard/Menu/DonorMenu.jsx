import {MdBloodtype} from "react-icons/md";
import MenuItem from "./MenuItem";
import {SlEyeglass} from "react-icons/sl";

const DonorMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdBloodtype}
        label="Donate blood"
        address="donate-blood"
      />
      <MenuItem
        icon={SlEyeglass}
        label="See blood requests"
        address="donate-blood"
      />
      <MenuItem
        icon={SlEyeglass}
        label="Donation history"
        address="donate-blood"
      />
    </>
  );
};

export default DonorMenu;
