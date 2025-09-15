import React, { useState } from 'react';
import '../text/text.css';
import Navbar from '../../components/navbar';
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";

const Text = () => {
  const [selectedVoice, setSelectedVoice] = useState('');

  return (
    <div className="gradient-background w-full min-h-screen">
      <Navbar />
      <div className="pt-32 grid grid-cols-1 xl:grid-cols-2 gap-10 mr-28 ">

        {/* ستون ۱ */}
        <div className="flex flex-col">

          {/* انتخاب زبان */}
          <select className="text-[22px] w-[600px] px-6 py-3 border border-gray-300 rounded-2xl bg-white text-black lalezar my-shadow focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="fa">فارسی</option>
            <option value="en">انگلیسی</option>
          </select>

          {/* انتخاب صدا */}
          <div className="text-[20px] mt-10 bg-white text-black w-[600px] rounded-2xl my-shadow2 lalezar p-4 flex flex-col">
            <h1 className="text-[24px] font-bold mb-2">انتخاب صدا</h1>
            <hr className="mb-4" />

            {/* زن */}
            <label className="flex items-center gap-3 cursor-pointer text-[22px] hover:text-blue-600 transition-colors">
              <input
                type="radio"
                name="voice"
                value="female"
                checked={selectedVoice === 'female'}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="w-6 h-6 accent-green-500"
              />
              <FcBusinesswoman size={30} />
              <span>زن</span>
            </label>

            {/* مرد */}
            <label className="flex items-center gap-3 cursor-pointer text-[22px] hover:text-blue-600 mt-6 transition-colors">
              <input
                type="radio"
                name="voice"
                value="male"
                checked={selectedVoice === 'male'}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="w-6 h-6 accent-green-500"
              />
              <FcBusinessman size={30} />
              <span>مرد</span>
            </label>

            {/* نمایش انتخاب کاربر */}
            {selectedVoice && (
              <p className="mt-4 text-green-500">
                شما <strong>{selectedVoice === 'female' ? 'زن' : 'مرد'}</strong> را انتخاب کردید.
              </p>
            )}
          </div>
       
              <div>
                <button className='lalezar w-[600px] h-[80px] bg-green-500 mt-8 rounded-3xl text-[27px]'>تبدیل به صدا</button>
              </div>
               
        </div>

        {/* ستون ۲ */}

    <div className="bg-white rounded-2xl p-6 my-shadow2 text-lg ml-52">
        <textarea
          placeholder="اینجا تایپ کن..."
          className="w-[600px] h-[400px] bg-white border border-gray-300 rounded-2xl shadow-inner p-4 text-black text-[20px] lalezar focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-right"
        />
        
    </div>

     
      {/* show voice */}
      <div >
        show voice
      </div>

      </div>
    </div>
  );
}

export default Text;
