import React, { useState } from "react";
import "../healthy/healthy.css";
import Navbar from "../../components/navbar";

const Health = () => {
  const [activeTab, setActiveTab] = useState("bmi");
  const [weight, setWeight] = useState(""); // کیلوگرم
  const [height, setHeight] = useState(""); // سانتی‌متر
  const [age, setAge] = useState(""); // سال
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("لطفاً وزن و قد را وارد کنید!");
      return;
    }
    const h = height / 100; // متر
    const bmi = weight / (h * h);
    let category = "";
    if (bmi < 18.5) category = "کمبود وزن";
    else if (bmi < 25) category = "طبیعی";
    else if (bmi < 30) category = "اضافه وزن";
    else category = "چاق";
    setResult(`BMI شما: ${bmi.toFixed(2)} (${category})`);
  };

  const calculateBMR = () => {
    if (!weight || !height || !age) {
      alert("لطفاً وزن، قد و سن را وارد کنید!");
      return;
    }
    let bmr;
    if (gender === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }
    setResult(`BMR شما: ${bmr.toFixed(2)} کالری در روز`);
  };

  return (
    <div className="gradient-background w-full min-h-screen">
      <Navbar />

      <div className="max-w-2xl mx-auto mt-28 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6">
        {/* تب‌ها */}
        <div className="flex mb-4 border-b">
          <button
            onClick={() => {
              setActiveTab("bmi");
              setResult(null);
            }}
            className={`flex-1 py-3 text-center rounded-t-xl transition ${
              activeTab === "bmi"
                ? "bg-blue-500 text-white font-bold"
                : "hover:bg-blue-100"
            }`}
          >
            BMI
          </button>
          <button
            onClick={() => {
              setActiveTab("bmr");
              setResult(null);
            }}
            className={`flex-1 py-3 text-center rounded-t-xl transition ${
              activeTab === "bmr"
                ? "bg-blue-500 text-white font-bold"
                : "hover:bg-blue-100"
            }`}
          >
            BMR
          </button>
        </div>

        {/* محتوای تب‌ها */}
        <div className="flex flex-col gap-4 p-6">
          {activeTab === "bmi" && (
            <>
              <input
                type="number"
                placeholder="وزن (کیلوگرم)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="قد (سانتی‌متر)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={calculateBMI}
                className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-xl shadow-md hover:bg-blue-600 transition"
              >
                محاسبه BMI
              </button>
            </>
          )}

          {activeTab === "bmr" && (
            <>
              <input
                type="number"
                placeholder="وزن (کیلوگرم)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="قد (سانتی‌متر)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="سن (سال)"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                    className="bg-white text-black border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  مرد
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")} 
                   className="bg-white text-black border border-gray-400 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  زن
                </label>
              </div>
              <button
                onClick={calculateBMR}
                className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-xl shadow-md hover:bg-blue-600 transition"
              >
                محاسبه BMR
              </button>
            </>
          )}

          {result && (
            <div className="mt-4 p-4 bg-gray-100 rounded-xl text-center font-semibold shadow-sm text-black">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Health;
