import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  const handleIsOpenHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  return (
    <div>
      <div className="fixed top-0 z-50 w-full">
        {/* List Desktop */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between px-10 bg-white shadow-lg">
            <div className="flex items-center gap-x-10">
              <Link to="/">
                <h1 className="text-2xl font-extrabold text-green-900">
                  Shopz
                </h1>
              </Link>
              <div className="flex items-center pt-2 gap-x-7">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-5 text-sm border-b-4 hover:text-green-900 ${
                      isActive ? "border-green-900" : "border-white"
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/live"
                  className={({ isActive }) =>
                    `py-5 text-sm border-b-4 hover:text-green-900 ${
                      isActive ? "border-green-900" : "border-white"
                    }`
                  }
                >
                  Live🔥
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `py-5 text-sm border-b-4 hover:text-green-900 ${
                      isActive ? "border-green-900" : "border-white"
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/tutorial"
                  className={({ isActive }) =>
                    `py-5 text-sm border-b-4 hover:text-green-900 ${
                      isActive ? "border-green-900" : "border-white"
                    }`
                  }
                >
                  Tutorial
                </NavLink>
              </div>
            </div>
            <div className="flex text-xl gap-x-7">
              <FaRegHeart />
              <FiShoppingCart />
              <VscAccount />
            </div>
          </div>
        </div>

        {/* List Mobile */}
        <div className="block bg-white shadow-lg md:hidden">
          {/* Navbar Header */}
          <div
            className={`flex items-center justify-between px-5 py-5 pb-5 ${
              isOpenHamburger ? "border-b-2 border-b-gray-300" : ""
            }`}
          >
            <button onClick={handleIsOpenHamburger}>
              <RxHamburgerMenu className="text-3xl" />
            </button>
            <h1 className="text-2xl font-extrabold text-green-900">Shopz</h1>
            <div className="flex text-xl gap-x-3">
              <VscAccount className="text-3xl" />
            </div>
          </div>

          {/* Isi Button Hamburger */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpenHamburger ? "max-h-56" : "max-h-0"
            }`}
          >
            <div className="flex flex-col px-5 py-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `pb-1 mb-1 border-b-2 ${
                    isActive
                      ? "border-b-green-900 text-green-900"
                      : "border-b-white"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/live"
                className={({ isActive }) =>
                  `pb-1 mb-1 border-b-2 ${
                    isActive
                      ? "border-b-green-900 text-green-900"
                      : "border-b-white"
                  }`
                }
              >
                Live🔥
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `pb-1 mb-1 border-b-2 ${
                    isActive
                      ? "border-b-green-900 text-green-900"
                      : "border-b-white"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/tutorial"
                className={({ isActive }) =>
                  `pb-1 mb-1 border-b-2 ${
                    isActive
                      ? "border-b-green-900 text-green-900"
                      : "border-b-white"
                  }`
                }
              >
                Tutorial
              </NavLink>
              <div className="flex text-xl gap-x-5">
                <FaRegHeart />
                <FiShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay background */}
      {isOpenHamburger && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-10"
          onClick={handleIsOpenHamburger}
        ></div>
      )}
    </div>
  );
}
