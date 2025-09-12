import React, { useState } from 'react';
import '../map/map.css';
import Navbar from '../../components/navbar';
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Cities from '../../data/Cities.json'

const Map = () => {
  const [Route, setRoute] = useState([]);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  // آرایه ساده شهرها و مختصاتشان


  const handleShowRoute = () => {
    if (cities[start] && cities[end]) {
      setRoute([
        cities[start],
        cities[end]
      ]);
    } else {
      alert("لطفاً نام شهر را درست وارد کنید.");
    }
  }

  return (
    <div className='gradient-background min-h-screen p-5'>
      <Navbar />

      {/* عنوان */}
      <p className='text-[40px] lalezar text-white mr-40 mt-24 mb-10'>
        فاصله شهرها
      </p>

      {/* محتوای اصلی */}
      <div className='flex flex-col md:flex-row gap-8 md:gap-10'>

        {/* ستون اول - ورودی شهرها */}
        <div className='flex flex-col gap-4 w-full md:w-1/3'>
          <input
            type="text"
            value={start}
            onChange={(e)=>setStart(e.target.value)}
            placeholder='شهر مبداء را وارد کنید.'
            className="border p-3 rounded-lg bg-white focus:outline-none focus:border-green-600 transition-colors text-black"
          />
          <input
            type="text"
            value={end}
            onChange={(e)=>setEnd(e.target.value)}
            placeholder='شهر مقصد را وارد کنید.'
            className="border p-3 rounded-lg bg-white focus:outline-none focus:border-green-600 transition-colors text-black"
          />
          {/* دکمه برای نمایش مسیر */}
          <button
            onClick={handleShowRoute}
            className="mt-4 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            نمایش مسیر
          </button>

          <p>فاصله: </p>
        </div>

        {/* ستون دوم - نقشه */}
        <div className='w-full md:w-2/3 flex justify-center items-start'>
          <MapContainer
            center={[32.4279, 53.6880]}  // مرکز ایران
            zoom={5}
            style={{ height: "500px", width: "800px" }}
            maxBounds={[[24,44],[40,64]]} // محدود کردن حرکت نقشه به ایران
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {Route.length > 0 && (
              <Polyline positions={Route} color='blue'/>
            )}
          </MapContainer>
        </div>

      </div>
    </div>
  )
}

export default Map;
