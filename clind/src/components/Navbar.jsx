import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import logo from "./images/slider/logo.jpeg";
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      // y asix pe hme scroll bar use karna to  scrollY
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  // navItems here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Category", path: "/about" },
    { link: "Books", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    // { link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full bg-transparent  top-0  left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-8 lg:px-24 p-4 
          ticky top-0 left-0 right-0 bg-white-300 
        `}
      >
        <div className="flex justify-between item-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl  font-bold  text-black-700   flex items-center   gap-2"
          >
            {" "}
            <img src={logo} alt=".." className="h-10 w-10" />
            ReadFantastic
            {/* className="inline-block" ReadFentastic */}
          </Link>
          {/* nav item for large device */}
          <ul className="md:flex space-x-5 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black cursor-pointer hover:text-red-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          {/* // Search button */}
          {/* <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm  outline-none bg-gray-300"
            />
            <button className="bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-800 transition-all ease-in duration-200 ">
              Search
            </button>
          </div> */}

          {/* btn for lg  devices */}
          <div className="space-x-12 hidden lg:flex items-center ">
            <button>
              <FaBarsStaggered className="w-5  hover:text-blue-700" />
            </button>
          </div>
          {/* menu btn for the mobile devises */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
          {/* navitems for sm devies */}
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-white uppercase cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
