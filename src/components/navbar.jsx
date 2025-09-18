import React, { useState, useEffect } from 'react';
import mainicon from '../assets/icons/tools.png';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  { name: "QR Code", path: "/qrcode" },
  { name: "عکس", path: "/image" },
  { name: "نقشه", path: "/map" },
  { name: "سلامت", path: "/health" },
  { name: "IP", path: "/ip" },
  { name: "متن", path: "/text" },
  { name: "زمان", path: "/time" },
  { name: "واحدها", path: "/unite" },
  { name: "هوش مصنوعی", path: "/ai" },
  { name: "تمپت", path: "/tempt" },
];

// ساخت Map برای هدایت مستقیم
const searchMap = {
  "qr": "/qrcode",
  "qr code": "/qrcode",
  "تصویر": "/image",
  "عکس": "/image",
  "نقشه": "/map",
  "سلامت": "/health",
  "ip": "/ip",
  "متن": "/text",
  "زمان": "/time",
  "واحد": "/unite",
  "هوش مصنوعی": "/ai",
  "ai": "/ai",
  "دما": "/tempt"
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1023) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const key = searchText.trim().toLowerCase();
    if (key && searchMap[key]) {
      navigate(searchMap[key]); // هدایت مستقیم
    } else {
      alert("نتیجه‌ای پیدا نشد"); // یا navigate("/search") اگر خواستی صفحه پیشفرض داشته باشه
    }
    setSearchText("");
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center Byekan text-[25px] cursor-pointer gap-4 h-36 relative">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <Link to="/"><h1 className="font-semibold text-green-300 ">Km Tools</h1></Link>
            <Link to="/"><img src={mainicon} alt="header icon" width={60} className="max-lg:my-10" /></Link>
          </div>

          <div className="hidden lg:flex gap-6 items-center relative">
            <Link to="/"><p className="hover:text-green-500">خانه</p></Link>
            <div 
              className="hover:text-green-500 flex items-center gap-1 relative cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              دسته‌بندی‌ها <IoMdArrowDropdown />
              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-white text-black shadow-lg rounded-md py-2 z-50 min-w-[150px]">
                  {categories.map((cat) => (
                    <Link key={cat.path} to={cat.path}>
                      <p className="px-4 py-2 hover:bg-green-100">{cat.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          className={`w-full border-b-2 border-white flex items-center justify-between text-[19px] transition-all duration-500 ${
            isOpen ? "mt-28" : "mt-0 lg:mt-0 mt-4"
          }`}
        >
          <input
            type="text"
            placeholder="دنبال چه ابزاری هستید؟"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-transparent w-full outline-none"
          />
          <button type="submit" className="ml-3 hover:text-green-500">
            <FaSearch />
          </button>
        </form>

        <div
          className="lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer px-6 hover:text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-transparent text-white flex flex-col gap-2 px-6 py-4 text-[20px] cursor-pointer">
          <Link to="/"><p className="hover:text-green-500">خانه</p></Link>
          {categories.map((cat) => (
            <Link key={cat.path} to={cat.path} onClick={() => setIsOpen(false)}>
              <p className="hover:text-green-500">{cat.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
