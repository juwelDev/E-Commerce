import { baseUrl } from "@/config/appConfig";
import { FaBars, FaBed, FaUtensils } from "react-icons/fa";
import { FaMattressPillow } from "react-icons/fa6";



const Header = () => {
  return (
    <>
      {/* Start Header */}
      <header>
        <div className="container">
          <div className="row flex items-center justify-between py-3">
            {/* Col 1 */}
            <div>
              <a href="index.html">
                <img
                  src={`${baseUrl}/img/logo/logo.png`}
                  alt="website-logo"
                  className="w-24"
                />
              </a>
            </div>
            {/* Col 2 */}
            <div>
              <div className="flex border border-r-0 rounded-md border-accentOne">
                <img
                  src={`${baseUrl}/img/icon/search.svg`}
                  alt="search"
                  className="pl-3 pr-4"
                />
                <form>
                  <input
                    type="text"
                    placeholder="search"
                    className="py-2  focus:outline-0 focus:ring-0 border-0"
                  />
                  <input
                    type="submit"
                    defaultValue="Search"
                    className="bg-accentOne text-white rounded-r-md px-3 py-2 cursor-pointer"
                  />
                </form>
              </div>
            </div>
            {/* Col 3*/}
            <div className="flex space-x-3">
              <div className="relative flex flex-col items-center cursor-pointer">
                <img src={`${baseUrl}/img/icon/heart.svg`} alt="" />
                <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-8">
                  8
                </span>
                
                <a href="WishList">WishList</a>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer">
                <img src={`${baseUrl}/img/icon/shopping-cart.svg`} alt="" />
                <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                  5
                </span>
                <p>Cart</p>
              </div>
              <div className=" flex flex-col items-center cursor-pointer">
                <img src={`${baseUrl}/img/icon/user.svg`} alt="" />
                <p>Account</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      {/* Start Navbar */}
      <nav className="bg-primary text-white">
        <div className="container">
          <div className="row flex items-center space-x-5">
            {/* Col 1 */}
            <div className="relative group">
              <div className="bg-accentOne">
                <a href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <i className="fa-solid fa-bars text-white" />
                    <FaBars className="text-white" />
                  </span>
                  <span>All Categories</span>
                </a>
              </div>
              {/* Dropdown Menu */}
              <div className="text-primary absolute bg-white w-full shadow-md divide-y divide-dashed divide-separatorColor opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500">
                <a href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <FaBed className="text-accentOne" />
                  </span>
                  <span>Bedroom</span>
                </a>
                <a href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <FaMattressPillow className="text-accentOne" />
                  </span>
                  <span>Mattress</span>
                </a>
                <a href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <FaUtensils className="text-accentOne" />
                  </span>
                  <span>Dinning</span>
                </a>
              </div>
            </div>
            {/* Col 2 */}
            <div className="flex justify-between flex-grow">
              <div className="space-x-5">
                <a href="index.html">Home</a>
                <a href="shop">Shop</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
              </div>
              <div>
                <a href="#">Login/Register</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default Header;
