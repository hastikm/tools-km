import React, { useState } from "react";
import "../picture/picture.css";
import Navbar from "../../components/navbar";

export default function Picture() {
  const [activeTab, setActiveTab] = useState("compress");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [targetFormat, setTargetFormat] = useState("jpg");
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImage(URL.createObjectURL(file));
    setResultImage(null);
  };

  // کاهش حجم تصویر
  const handleCompress = async () => {
    if (!imageFile) return;
    setLoading(true);
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // کاهش کیفیت به 0.5 (50%)
      const dataURL = canvas.toDataURL("image/jpeg", 0.5);
      setResultImage(dataURL);
      setLoading(false);
    };
    img.onerror = () => {
      alert("مشکل در بارگذاری تصویر!");
      setLoading(false);
    };
  };

  // تبدیل فرمت تصویر
  const handleConvertFormat = async () => {
    if (!imageFile) return;
    setLoading(true);
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL(
        targetFormat === "png" ? "image/png" : "image/jpeg",
        1.0
      );
      setResultImage(dataURL);
      setLoading(false);
    };
    img.onerror = () => {
      alert("مشکل در بارگذاری تصویر!");
      setLoading(false);
    };
  };

  return (
    <div className="gradient-background w-full min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto  bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 mt-28">
        {/* تب‌ها */}
        <div className="flex mb-4 border-b">
          <button
            onClick={() => {
              setActiveTab("compress");
              setImage(null);
              setResultImage(null);
            }}
            className={`flex-1 py-3 text-center rounded-t-xl transition ${
              activeTab === "compress"
                ? "bg-blue-500 text-white font-bold"
                : "hover:bg-blue-100"
            }`}
          >
            کاهش حجم
          </button>

          <button
            onClick={() => {
              setActiveTab("convert");
              setImage(null);
              setResultImage(null);
            }}
            className={`flex-1 py-3 text-center rounded-t-xl transition ${
              activeTab === "convert"
                ? "bg-blue-500 text-white font-bold"
                : "hover:bg-blue-100"
            }`}
          >
            تبدیل فرمت
          </button>
        </div>

        {/* محتوای تب‌ها */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center p-6">
          {/* باکس آپلود */}
          <div className="flex-1 flex flex-col items-center">
            <label
              htmlFor="upload"
              className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-2xl p-8 hover:bg-gray-50 transition w-72 h-72"
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="max-h-64 rounded-xl shadow-md"
                />
              ) : (
                <span className="text-gray-500 text-center">
                  عکس رو اینجا بکشید یا کلیک کنید برای آپلود
                </span>
              )}
              <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {/* انتخاب فرمت فقط برای تب تبدیل */}
            {activeTab === "convert" && (
              <div className="mt-4 flex flex-col items-center gap-2">
                <label className="text-black font-semibold">
                  انتخاب فرمت خروجی:
                </label>
                <select
                  value={targetFormat}
                  onChange={(e) => setTargetFormat(e.target.value)}
                  className="bg-white text-black border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="jpg">JPG</option>
                  <option value="png">PNG</option>
                </select>
              </div>
            )}

            {/* دکمه اکشن */}
            {image && (
              <button
                onClick={
                  activeTab === "compress"
                    ? handleCompress
                    : handleConvertFormat
                }
                className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-xl shadow-md hover:bg-blue-600 transition"
                disabled={loading}
              >
                {loading
                  ? "در حال پردازش..."
                  : activeTab === "compress"
                  ? "کاهش حجم"
                  : `تبدیل به ${targetFormat.toUpperCase()}`}
              </button>
            )}
          </div>

          {/* نمایش تصویر خروجی */}
          {resultImage && (
            <div className="flex-1 flex flex-col items-center">
              <span className="font-semibold mb-2">نتیجه:</span>
              <img
                src={resultImage}
                alt="Result"
                className="max-h-72 rounded-xl shadow-lg"
              />
              <a
                href={resultImage}
                download={`result.${activeTab === "convert" ? targetFormat : "jpg"}`}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition"
              >
                دانلود عکس
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
