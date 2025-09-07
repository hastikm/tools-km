import React from 'react';
import mainicon from '../assets/icons/tools.png';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center Byekan text-[25px] cursor-pointer gap-4 h-36 relative">

        {/* ستون اول: لوگو + nav items */}
        <div className="flex items-center gap-12">
          {/* لوگو */}
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-green-300 custom-shadow">Km Tools</h1>
            <img src={mainicon} alt="header icon" width={60} className='max-lg:my-10' />
          </div>

          {/* آیتم‌های منو فقط دسکتاپ */}
          <div className="flex gap-6 lg:flex hidden">
            <p className="hover:text-green-500">خانه</p>
            <p className="hover:text-green-500">دسته‌بندی‌ها</p>
          </div>
        </div>

        {/* ستون دوم: سرچ‌بار */}
        <div className="w-full border-b-2 border-white mt-4 md:mt-0 flex items-center justify-between text-[19px]">
          <input
            type="text"
            placeholder="دنبال چه ابزاری هستید؟"
            className="bg-transparent w-full outline-none focus:border-blue-400 transition-colors duration-300"
          />
          <div className="hover:text-green-500 ml-3">
            <FaSearch />
          </div>
        </div>

        {/* منوی همبرگری در سمت چپ صفحه برای lg و پایین */}
        <div className="lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer px-6">
          <GiHamburgerMenu />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
