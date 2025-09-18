// pages/search/Search.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

// داده‌های نمونه برای نمایش در نتایج
const toolsList = [
  { name: "QR Generator", path: "/qrcode" },
  { name: "تصویر ابزار", path: "/image" },
  { name: "نقشه گوگل", path: "/map" },
  { name: "سلامت سنج", path: "/health" },
  { name: "IP Finder", path: "/ip" },
  { name: "تبدیل متن", path: "/text" },
  { name: "ساعت جهانی", path: "/time" },
  { name: "تبدیل واحدها", path: "/unite" },
  { name: "هوش مصنوعی", path: "/ai" },
  { name: "دموی Tempt", path: "/tempt" },
];

const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query") || "";

  // فیلتر کردن ابزارها بر اساس متن سرچ (case-insensitive)
  const results = toolsList.filter(tool =>
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        نتایج جستجو برای: "{query}"
      </h1>

      {results.length === 0 ? (
        <p>هیچ نتیجه‌ای پیدا نشد.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {results.map(tool => (
            <li key={tool.path}>
              <a
                href={tool.path}
                className="block px-4 py-2 border rounded hover:bg-green-100 hover:text-green-700"
              >
                {tool.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
