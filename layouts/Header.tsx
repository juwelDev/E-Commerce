import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { useDispatch, useSelector } from "react-redux";
import { setCartList } from '@/lib/reduxStore/slices/storeSlice';


import { parseCookies, setCookie, destroyCookie } from "nookies";
import { baseUrl } from "@/config/appConfig";
import { FaBars, FaTshirt, FaCartPlus, FaRegHeart, FaUser, FaUtensils } from "react-icons/fa";
import { FaMattressPillow } from "react-icons/fa6";
import { BsFillSunFill, BsMoonStarsFill,BsSunglasses } from "react-icons/bs";
import {GiMonclerJacket,GiArmoredPants,GiShoebillStork} from 'react-icons/gi';
import {IoWatch} from 'react-icons/io5'
import { UserModel } from "@/models";
import UserProfileTop from "@/components/User/UserProfileTop";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile_avatar: string;
  userRole: string;
};

const Header = () => {

  const cookies = parseCookies();
  const user = cookies?.user;
  const token = cookies?.token;

  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) => state.utils.cartList.count);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();

  const getUser = async (id: any) => {
    const getUser = await fetch(`/api/user/${id}`);
    const result = await getUser.json();
    if (result.status == true) {
      setUserInfo(result.user);
      setLoading(false);
    }
  };


  useEffect(() => {
    let cuser = cookies?.user;
    if (cuser) {
      let luser = JSON.parse(cuser);
      getUser(luser._id);
    } else {
      setLoading(false);
    }
  }, [cookies?.user]);

  useEffect(() => {
    setMounted(true);
    dispatch(setCartList());
  }, [])

  console.log('user info', userInfo);

  const renderThemeMode = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="w-8 h-8 focus:outline-none flex items-center">
          <BsFillSunFill
            className="ml-1 w-6 h-6 text-yellow-400  dark:text-white"
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button className="w-8 h-8 focus:outline-none flex items-center">
          <BsMoonStarsFill
            className="ml-1 w-6 h-6 text-gray-700 dark:text-white"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  return (
    <>
      {/* Start Header */}
      <header className="bg-gray-50 dark:bg-gray-600">
        <div className="container">
          <div className="row flex items-center justify-between py-3">
            {/* Col 1 */}
            <div>
              <Link href="/">
                <picture>
                  <img
                    src={`${baseUrl}/img/logo/weblogo.png`}
                    alt="website-logo"
                    className="w-24"
                  />
                </picture>
              </Link>
            </div>
            {/* Col 2 */}
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pr-25 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  
                />
                <button
                  type="submit"
                  className="text-black dark:text-white absolute end-2.5 bottom-2.5 bg-blue-300 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Col 3*/}
            <div className="flex space-x-3">
              <div className="relative flex flex-col items-center cursor-pointer">
                <Link href={`${baseUrl}/wishlist`}>
                  <FaRegHeart className="text-[24px] text-black dark:text-white" />
                  <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                    8
                  </span>
                  <p className="text-black dark:text-white">WishList</p>
                </Link>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer">
                <Link href={`${baseUrl}/cart`}>
                  <FaCartPlus className="text-[24px] text-black dark:text-white" />
                  <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                    {cartCount}
                  </span>
                  <p className="text-black dark:text-white">Cart</p>
                </Link>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer">
                {renderThemeMode()}
              </div>
              <div className=" flex flex-col items-center cursor-pointer">
                {/* {
                  userInfo == null ?
                    <Link href={`${baseUrl}/login`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link> :
                    <Link href={`${baseUrl}/my-account`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link>
                } */}

                <UserProfileTop />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      {/* Start Navbar */}
      <nav className="bg-accentOne text-white flex sticky top-0 absolute z-10">
        <div className="container">
          <div className="row flex items-center space-x-5">
            {/* Col 1 */}
            <div className="relative group">
              <div className="bg-primary">
                <Link href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <i className="fa-solid fa-bars text-white" />
                    <FaBars className="text-white" />
                  </span>
                  <span>All Categories</span>
                </Link>
              </div>
              {/* Dropdown Menu */}
              <div className="text-white absolute bg-accentOne w-full shadow-md divide-y divide-dashed divide-separatorColor opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500">
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary ">
                  <span>
                  <GiMonclerJacket />
                  </span>
                  <Link href={`${baseUrl}/#`}>Jacket</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary  ">
                  <span>
                  <FaTshirt/>
                  </span>
                  <Link href={`${baseUrl}/#`}>T'Shirt</Link>
                </span>
                <span  className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <GiArmoredPants/>
                  </span>
                  <Link href={`${baseUrl}/#`}>Pant</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <GiShoebillStork/>
                  </span>
                  <Link href={`${baseUrl}/#`}>Shoes</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <IoWatch />
                  </span>
                  <Link href={`${baseUrl}/#`}>Watch</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <BsSunglasses />
                  </span>
                  <Link href={`${baseUrl}/#`}>Sunglasses</Link>
                </span>
              </div>
            </div>
            {/* Col 2 */}
            <div className="flex justify-between flex-grow ">
              <div className="space-x-5 flex">
                <Link href={`${baseUrl}/`}className=" hover:bg-accentTwo p-3">Home</Link>
                <Link href={`${baseUrl}/shop`} className=" hover:bg-accentTwo p-3">Shop</Link>
                <Link href={`${baseUrl}/about`}className=" hover:bg-accentTwo p-3">About Us</Link>
                {/* <Link href={`${baseUrl}/contact-us`}className=" hover:bg-accentTwo p-3">Contact Us</Link> */}
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
