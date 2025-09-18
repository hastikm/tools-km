import Search from '../src/pages/search/search';
import 'leaflet/dist/leaflet.css'; 
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Qr from "./pages/QRcode/Qr"; 
import Picture from "./pages/picture/picture";
import Map from "./pages/map/Map";
import Health from "./pages/healthy/Health";
import Ip from "./pages/ip/Ip";
import Time from "./pages/time/Time";
import Text from "./pages/text/Text";
import Unite from "./pages/unite/Unite";
import Ai from "./pages/ai/Ai";
import Tempt from "./pages/tempt/Tempt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qrcode" element={<Qr />} />
      <Route path="/image" element={<Picture />} />
      <Route path="/map" element={<Map />} />
      <Route path="/health" element={<Health />} />
      <Route path="/ip" element={<Ip />} />
      <Route path="/text" element={<Text />} />
      <Route path="/time" element={<Time />} />
      <Route path="/unite" element={<Unite />} />
      <Route path="/ai" element={<Ai />} />
      <Route path="/tempt" element={<Tempt />} />

      {/* اضافه کردن مسیر صفحه نتایج سرچ */}
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
