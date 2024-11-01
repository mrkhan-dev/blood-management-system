import {useState} from "react";
import {GrLogout} from "react-icons/gr";
import {FcSettings} from "react-icons/fc";
import {AiOutlineBars} from "react-icons/ai";
import {BsGraphUp} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png";
import MenuItem from "./Menu/MenuItem";
import AdminMeu from "./Menu/AdminMeu";
import DonorMenu from "./Menu/DonorMenu";
import useRole from "../../hooks/useRole";
import RecipientMenu from "./Menu/RecipientMenu";

const Sidebar = () => {
  const {logOut} = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  // modal

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link className="flex items-center" to="/">
              <img className="h-6 w-6" src={logo} alt="" />
              <p className="text-xl font-semibold">
                Donate<span className="text-[#FE3C47]">4</span>Life
              </p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#FBFCF8] shadow-xl w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-white mx-auto">
              <Link className="flex items-center" to="/">
                <img className="h-10 w-10" src={logo} alt="logo" />
                <p className="text-2xl font-semibold">
                  Donate<span className="text-[#FE3C47]">4</span>Life
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}

              <MenuItem
                address="/dashboard"
                label="Statistics"
                icon={BsGraphUp}
              />
              {role === "admin" && <AdminMeu />}
              {role === "donor" && <DonorMenu />}
              {role === "recipient" && <RecipientMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({isActive}) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#ffdada]   hover:text-gray-700 ${
                isActive ? "bg-[#ffdada]  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#ffdada]   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
