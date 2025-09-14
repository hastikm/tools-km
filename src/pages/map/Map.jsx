import React, { useState } from 'react';
import '../map/map.css';
import Navbar from '../../components/navbar';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Cities from '../../data/Cities.json'

const Map = () => {
  const [route, setRoute] = useState([]);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [distance, setDistance] = useState(null);

  // تابع محاسبه فاصله با فرمول Haversine
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // شعاع زمین به کیلومتر
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const RoutClickHandler = () => {
    // پیدا کردن شهر مبداء
    const StartCity = Cities.DB.find(c =>
      c.City.trim().toLowerCase() === start.trim().toLowerCase() ||
      c.State.trim().toLowerCase() === start.trim().toLowerCase()
    );

    // پیدا کردن شهر مقصد
    const EndCity = Cities.DB.find(c =>
      c.City.trim().toLowerCase() === end.trim().toLowerCase() ||
      c.State.trim().toLowerCase() === end.trim().toLowerCase()
    );

    if (!StartCity || !EndCity) {
      alert("شهر یا استان پیدا نشد");
      return;
    }

    // ساخت آرایه مختصات برای نمایش روی نقشه
    const routeCoords = [
      [StartCity.lat, StartCity.long],
      [EndCity.lat, EndCity.long]
    ];

    setRoute(routeCoords);

    // محاسبه فاصله
    const dist = calculateDistance(StartCity.lat, StartCity.long, EndCity.lat, EndCity.long);
    setDistance(dist.toFixed(2)); // دو رقم اعشار
  };

  return (
    <div className='gradient-background min-h-screen p-5'>
      <Navbar />

      <p className='text-[40px] lalezar text-white mr-40 mt-24 mb-10'>
        فاصله شهرها
      </p>

      <div className='flex flex-col md:flex-row gap-8 md:gap-10'>
        {/* ورودی شهرها */}
        <div className='flex flex-col gap-4 w-full md:w-1/3'>
          <input
            value={start}
            onChange={(e) => setStart(e.target.value)}
            type="text"
            placeholder='شهر مبداء را وارد کنید.'
            className="border p-3 rounded-lg bg-white focus:outline-none focus:border-green-600 text-black"
          />
          <input
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            type="text"
            placeholder='شهر مقصد را وارد کنید.'
            className="border p-3 rounded-lg bg-white focus:outline-none focus:border-green-600 text-black"
          />
          <button
            onClick={RoutClickHandler}
            className="mt-4 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            نمایش مسیر
          </button>

          {distance && <p>فاصله: {distance} کیلومتر</p>}
        </div>

        {/* نقشه */}
        <div className='w-full md:w-2/3 flex justify-center items-start'>
          <MapContainer
            center={[32.4279, 53.688]}
            zoom={5}
            style={{ height: "500px", width: "800px" }}
            maxBounds={[[24, 44], [40, 64]]}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />

            {route.length > 0 && (
              <>
                <Polyline positions={route} color="blue" />
                <Marker position={route[0]}>
                  <Popup>شروع: {start}</Popup>
                </Marker>
                <Marker position={route[1]}>
                  <Popup>پایان: {end}</Popup>
                </Marker>
              </>
            )}

          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
