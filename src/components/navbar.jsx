import React, { useState } from 'react';
import mainicon from '../assets/icons/tools.png';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
  import { useEffect } from 'react';
  import { IoMdArrowDropdown } from "react-icons/io";
  import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // کنترل باز/بسته بودن منو


useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1023) { // xl در Tailwind 1280px است
      setIsOpen(false); // منو خودکار بسته شود
    }
  };

  window.addEventListener('resize', handleResize);

  // اجرای اولیه هم برای زمانی که صفحه از اول بزرگ است
  handleResize();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


  return (
    <div className="container mx-auto px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center Byekan text-[25px] cursor-pointer gap-4 h-36 relative">

        {/* ستون اول: لوگو + nav items */}
        <div className="flex items-center gap-12">
          {/* لوگو */}
          <div className="flex items-center gap-4">
          <Link to={'/'}>  <h1 className="font-semibold text-green-300 ">Km Tools</h1></Link>
            <Link to={'/'}><img src={mainicon} alt="header icon" width={60} className="max-lg:my-10" /></Link>
          </div>

          {/* آیتم‌های منو فقط دسکتاپ */}
          <div className="flex gap-6 lg:flex hidden">
            <Link to={'/'}> <p className="hover:text-green-500">خانه</p></Link>
            <p className="hover:text-green-500">دسته‌بندی‌ها </p>
            <IoMdArrowDropdown />
          </div>
        </div>

        {/* ستون دوم: سرچ‌بار */}
    <div
  className={`w-full border-b-2 border-white flex items-center justify-between text-[19px] transition-all duration-500 ${
    isOpen ? "mt-28" : "mt-0 lg:mt-0 mt-4" 
  }`}
>
  <input
    type="text"
    placeholder="دنبال چه ابزاری هستید؟"
    className="bg-transparent w-full outline-none"
  />
  <div className="hover:text-green-500 ml-3">
    <FaSearch />
  </div>
</div>

        {/* همبرگری در موبایل */}
        <div
          className="lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer px-6 hover:text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* منوی موبایل (انیمیشن از بالا به پایین) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 handleResize  ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-transparent text-white flex gap-6 px-6 py-4 text-[20px] cursor-pointer">
          <p className="hover:text-green-500">خانه</p>
          <p className="hover:text-green-500"> دسته‌بندی‌ها</p>
          <IoMdArrowDropdown />
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
