import {useState} from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-white shadow ">
      <div className="container h-20 items-center px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-4xl font-semibold font-sourceSans ">
              Donate<span className="text-[#FE3C47]">4</span>Life
            </NavLink>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  ></svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full "
            } absolute inset-x-0 z-20 w-full transition-all duration-300 ease-in-out  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavLink
                to="/"
                className={({isActive}) =>
                  isActive
                    ? "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-lg font-sourceSans uppercase text-[#FE3C47] font-bold"
                    : "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-lg font-sourceSans uppercase hover:text-[#FE3C47] font-bold"
                }
              >
                home
              </NavLink>
              <NavLink
                to="/about"
                className={({isActive}) =>
                  isActive
                    ? "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-base font-sourceSans uppercase text-[#FE3C47] font-bold"
                    : "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-base font-sourceSans uppercase hover:text-[#FE3C47] font-bold"
                }
              >
                about us
              </NavLink>
              <NavLink
                to="campaign"
                className={({isActive}) =>
                  isActive
                    ? "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-base font-sourceSans uppercase text-[#FE3C47] font-bold"
                    : "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-base font-sourceSans uppercase hover:text-[#FE3C47] font-bold"
                }
              >
                campaign
              </NavLink>
              <NavLink
                to="contact"
                className={({isActive}) =>
                  isActive
                    ? "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-base font-sourceSans uppercase text-[#FE3C47] font-bold"
                    : "transition-colors duration-300 transform rounded-md lg:mt-0 px-3 py-2 mx-3 mt-2 text-base font-sourceSans uppercase hover:text-[#FE3C47] font-bold"
                }
              >
                contact
              </NavLink>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block 0 focus:text-gray-700 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700  lg:hidden">Khatab wedaa</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
