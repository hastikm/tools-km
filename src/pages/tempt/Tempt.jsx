import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../tempt/tempt.css';
import Navbar from '../../components/navbar';
const Tempt = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    location: "Tehran",
    temperature: 28,
    description: "Sunny",
    humidity: 45,
    wind: 12,
    icon: "☀️",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '7d3af434b9ff4d849a4191637253001';

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
      );

      const data = response.data;

      // تعیین آیکون بر اساس condition.text (می‌تونی ایکون‌های واقعی بذاری)
      let icon = '☀️';
      const condition = data.current.condition.text.toLowerCase();
      if (condition.includes('rain')) icon = '🌧️';
      else if (condition.includes('cloud')) icon = '☁️';
      else if (condition.includes('sun')) icon = '☀️';
      else if (condition.includes('snow')) icon = '❄️';

      setWeatherData({
        location: data.location.name,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        description: data.current.condition.text,
        icon: icon,
      });
    } catch (err) {
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  // بارگذاری پیش‌فرض تهران
  useEffect(() => {
    fetchWeather('Tehran');
  }, []);

  const handleSearch = () => {
    if (!city) return;
    fetchWeather(city);
    setCity('');
  };

  return (

    <div className="min-h-screen  gradient-background  ">
      <Navbar />
      <div className='flex flex-col items-center justify-center mt-28' >
      {/* Input جستجو */}
      <div className="mb-6 w-full max-w-sm flex">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-4 py-2 rounded-l-lg outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-white/30 hover:bg-white/50 text-white px-4 rounded-r-lg transition-all"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* کارت آب و هوا */}
      {weatherData && (
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center text-white">
          <div className="text-6xl mb-4">{weatherData.icon}</div>
          <h1 className="text-3xl font-bold mb-2">{weatherData.location}</h1>
          <p className="text-5xl font-extrabold mb-2">{weatherData.temperature}°C</p>
          <p className="text-xl italic mb-6">{weatherData.description}</p>

          <div className="flex justify-around text-left mt-6">
            <div>
              <p className="font-semibold">Humidity</p>
              <p>{weatherData.humidity}%</p>
            </div>
            <div>
              <p className="font-semibold">Wind</p>
              <p>{weatherData.wind} km/h</p>
            </div>
          </div>

          <button
            onClick={() => fetchWeather(weatherData.location)}
            className="mt-6 px-6 py-2 bg-white/30 hover:bg-white/50 rounded-full transition-all"
          >
            Refresh
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Tempt;
