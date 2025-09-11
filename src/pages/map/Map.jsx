import React from 'react';
import '../map/map.css';
import Navbar from '../../components/navbar';

const Map = () => {
  return (
    <div className='gradient-background h-screen'>
      <Navbar />

      {/* کل محتوا */}
      <p>فاصله شهر ها</p>
      <div className='flex justify-between px-10 py-10'>
        
        {/* ستون اول - ورودی شهرها */}

        
        <div className='flex flex-col gap-4 w-1/3'>
          <input
            type="text"
            placeholder='شهر مبداء را وارد کنید.'
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder='شهر مقصد را وارد کنید.'
            className="border p-3 rounded-lg"
          />
        </div>

        {/* ستون دوم - نمایش نقشه */}
        <div className='w-2/3 flex justify-center items-center'>
          <div className="box w-[400px] h-[500px] bg-white shadow-xl rounded-xl"></div>
        </div>

      </div>
    </div>
  )
}

export default Map;
