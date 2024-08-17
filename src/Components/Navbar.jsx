import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navlinks = (
    <>
      <li className="text-[17px] hover:border-b-2 border-b-yellow-300 hover:text-yellow-300">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-[17px] hover:border-b-2 border-b-yellow-300 hover:text-yellow-300">
        <a href="#">About us</a>
      </li>
      <li className="text-[17px] hover:border-b-2 border-b-yellow-300 hover:text-yellow-300">
        <a href="#">Men</a>
      </li>
      <li className="text-[17px] hover:border-b-2 border-b-yellow-300 hover:text-yellow-300">
        <a href="#">Women</a>
      </li>
      <li className="text-[17px] hover:border-b-2 border-b-yellow-300 hover:text-yellow-300">
        <a href="#">Kids</a>
      </li>
    </>
  );
  return (
    <div className="  shadow-md">
      <div className="lg:w-10/12 navbar mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} className="mx-2 lg:hidden">
              <HiOutlineMenuAlt3 size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <h1 className="font-potta text-xl lg:text-4xl">
            Shopping<span className="text-yellow-300">Portal</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-7 menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center">
            <Link
              to={"./login"}
              className="bg-yellow-300 rounded-md lg:px-7 px-4 lg:py-3 py-2 hover:bg-yellow-200"
            >
              Login
            </Link>
            <FiShoppingCart className="hover:text-yellow-600 " size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
