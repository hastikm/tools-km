import React, { useState } from "react";
import Navbar from "../../components/navbar";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("fa-IR");

  const speak = () => {
    if (!text.trim()) {
      alert("لطفا متن وارد کنید!");
      return;
    }

    // قطع کردن هر صدای قبلی
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;

    utterance.onend = () => console.log("پخش صدا تمام شد");

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="gradient-background w-full min-h-screen p-10">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-28 p-6 bg-white rounded-2xl shadow-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-black">تبدیل متن به صدا</h1>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          
          <option value="en-US">انگلیسی</option>
        </select>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="متن خود را وارد کنید..."
          className="w-full h-40 p-4 border rounded-lg"
        />

        <button
          onClick={speak}
          className="py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold"
        >
          تبدیل به صدا
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;
