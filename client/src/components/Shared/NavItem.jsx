import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const NavItem = ({label, address}) => {
  return (
    <div>
      <NavLink
        to={address}
        className={({isActive}) =>
          isActive
            ? "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-lg font-sourceSans uppercase text-[#FE3C47] font-bold"
            : "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-lg font-sourceSans uppercase hover:text-[#FE3C47] font-bold"
        }
      >
        <span className="mx-4 font-medium">{label}</span>
      </NavLink>
    </div>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
};

export default NavItem;
