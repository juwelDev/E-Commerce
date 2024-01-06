import React, { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter, } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";


const Footer = () => {
  return (
    <footer className="w-full">
    <div className="py-10 mt-24 border-t border-separate bg-white dark:bg-gray-900">
      <div className="container">
        <div className="row grid grid-cols-3 gap-x-10">
          {/* Col 1 */}
          <div className="col space-y-3">
            <div>
              <img src="images/logo/logo.png" alt="" className="w-24" />
            </div>
            <p>
            A clothes shop or clothes store is any shop which sells items of ready-made clothing. A small shop which sells expensive or designer clothing may be called a boutique.
            </p>
            <div>
              <h2 className="text-primary font-bold text-lg pb-3">NEWSLETTER</h2>
              <div>
                <form action="" className="flex border border-separate rounded-md pl-2 ">
                  <input
                    type="text dark:bg-gray-800"
                    placeholder="Enter your email"
                    className="w-full py-2 pl-2 focus:outline-0 focus:ring-0 border-0 dark:bg-gray-900"
                  />
                  <input
                    type="submit"
                    defaultValue="subscribe"
                    className="bg-accentOne text-white rounded-r-md px-3 py-2 cursor-pointer uppercase"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* Col 2 */}
          <div className="col grid gap-x-10 grid-cols-2">
            {/* Inner Col 1 */}
            <div className="space-y-3">
              <h2 className="text-primary font-bold text-lg pb-3">MY ACCOUNT</h2>
              <div className="flex flex-col space-y-3">
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Orders{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Wishlist{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Track Order{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Manage Account{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Return Order{" "}
                </a>
              </div>
            </div>
            {/* Inner Col 2 */}
            <div className="space-y-3">
              <h2 className="text-primary font-bold text-lg pb-3 uppercase">
                Information
              </h2>
              <div className="flex flex-col space-y-3">
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  About Us{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Return Policy{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Terms &amp; Condition{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a href="#" className="hover:text-accentOne">
                  {" "}
                  FAQ{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Col 3 */}
          <div className="space-y-3">
            <h2 className="text-primary font-bold text-lg pb-3 uppercase">contact</h2>
            <div className="flex flex-col space-y-3">
              <div className="flex">
                <span>
                  <FaLocationDot className="mr-2 mt-1" />
                </span>
                <p><b>House-05, Middle Badda, Dhaka, Bangladesh </b></p>
              </div>
              <div className="flex">
                <span>
                  <FaPhone className="mr-2 mt-1" />
                </span>
                <p><b>01727843082</b></p>
              </div>
              <div className="flex">
                <span>
                  <GrMail className="mr-2 mt-1" />
                </span>
                <p><b>karimchowdhury45@gmail.com</b></p>
              </div>
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-accentOne"
              >
                <FaFacebookF className="text-gray-900 text-['14px']" />
              </a>
              <a
                href="#"
                className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-accentOne"
              >
                <FaTwitter className="text-gray-900 text-['14px']" />
              </a>
              <a
                href="#"
                className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-accentOne"
              >
                <FaInstagram className="text-gray-900 text-['14px']" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

     
    </footer>
  );
}

export default Footer;