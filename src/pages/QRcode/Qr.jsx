import React, { useState } from "react";
import "../QRcode/Qr.css";
import Navbar from "../../components/navbar";

const Qr = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff"); // مقدار اولیه رنگ سفید
  const [qrCode, setQrCode] = useState("");

  // تابع ساخت QR Code
  const generateQrCode = () => {
    if (!text) return alert('لطفا متن را وارد کنید'); // اگه متن خالیه کاری نکن
    const colorWithoutHash = bgColor.replace("#", "");
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      text
    )}&size=150x150&bgcolor=${colorWithoutHash}`;
    setQrCode(url);
  };

  return (
    <div className="gradient-background1 w-screen min-h-screen flex flex-col lalezar">
      <Navbar />

      <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4 py-12 mt-14">
        {/* ستون سمت چپ - فرم ورودی */}
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex-1">
          <h1 className="text-black text-xl lg:text-2xl mb-4">
            برای ساخت کیو آر کد اطلاعات کادر زیر را وارد کنید و بر روی دکمه
            ساخت کیو آر کد کلیک کنید.
          </h1>
          <hr className="border-b-2 mb-6" />

          {/* فیلد متن */}
          <label className="block text-black text-lg mb-2">متن *</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="bg-slate-100 w-full h-20 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lime-500 outline-none text-black mb-6"
            placeholder="متن مورد نظر خود را وارد کنید..."
          />

          {/* فیلد انتخاب رنگ و دکمه */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <label className="text-black text-lg">رنگ پس‌زمینه *</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-10 p-0 border-none cursor-pointer"
              />
            </div>

            <button
              onClick={generateQrCode}
              className="bg-lime-700 hover:bg-lime-800 transition text-white font-bold px-6 py-3 rounded-2xl shadow-md"
            >
              ساخت کیو آر کد
            </button>
          </div>
        </div>

        {/* ستون سمت راست - نمایش QR Code */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex-1 flex items-center justify-center">
          {qrCode ? (
            <img src={qrCode} alt="Generated QR Code" className="w-60 h-60" />
          ) : (
            <div className="w-60 h-60 bg-gray-200 flex items-center justify-center rounded-xl">
              <span className="text-gray-500">QR Code اینجا نمایش داده می‌شود</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qr;
