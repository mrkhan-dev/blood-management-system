import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const MenuItem = ({label, address, icon: Icon}) => {
  return (
    <NavLink
      to={address}
      end
      className={({isActive}) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#ffdada]   hover:text-gray-700 ${
          isActive ? "bg-[#ffdada]  text-[#050316]" : "text-gray-600"
        }`
      }
    >
      <div className="bg-[#ffdada] h-10 w-10 rounded-full ">
        <Icon className="w-6 h-6 flex mt-2 ml-2  text-[#ff4747]" />
      </div>

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.elementType,
};

export default MenuItem;
