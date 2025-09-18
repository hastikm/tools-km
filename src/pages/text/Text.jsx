import React, { useState } from "react";
import Navbar from "../../components/navbar";

const Text = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("fa");
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "073b6ce0482c4da89371fb72477d12cf"; // کلید API تو

  const speak = async () => {
    if (!text) return alert("متن وارد کنید!");
    setLoading(true);
    setAudioUrl("");

    try {
      // آدرس API با پارامترهای درست
      const url = `https://api.voicerss.org/?key=${API_KEY}&hl=${selectedLanguage}&src=${encodeURIComponent(
        text
      )}&c=MP3&f=44khz_16bit_stereo`;

      setAudioUrl(url);

      // پخش خودکار صدا
      const audio = new Audio(url);
      await audio.play();
    } catch (err) {
      console.error("خطا در پخش صدا:", err);
      alert("خطا در تبدیل متن به صدا");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gradient-background w-full min-h-screen p-10">
      <Navbar />

      <div className="max-w-5xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 mt-28">
        {/* ستون تنظیمات */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-white mb-4">
            تبدیل متن به صدا
          </h1>

          <select
            className="text-[20px] w-full px-6 py-3 border border-gray-300 rounded-2xl bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="fa">فارسی</option>
            <option value="en-us">انگلیسی</option>
          </select>

          <button
            onClick={speak}
            disabled={loading}
            className={`w-full py-5 rounded-3xl text-xl font-bold text-white transition-colors ${
              loading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "در حال تولید..." : "تبدیل به صدا"}
          </button>

          {audioUrl && (
            <div className="mt-4 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center gap-3">
              <audio controls src={audioUrl} className="w-full rounded-md" />
              <a
                href={audioUrl}
                download="speech.mp3"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors"
              >
                دانلود فایل صوتی
              </a>
            </div>
          )}
        </div>

        {/* ستون متن */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-black">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="اینجا متن خود را وارد کنید..."
            className="w-full h-[400px] p-4 rounded-2xl border border-gray-300 shadow-inner text-[18px] focus:outline-none focus:ring-2 focus:ring-green-400 text-right bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
