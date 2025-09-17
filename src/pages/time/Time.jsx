import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "../time/time.css";
import Swal from "sweetalert2";
import jalaali from "jalaali-js";

const Time = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const persianMonths = [
    "فروردین", "اردیبهشت", "خرداد", "تیر",
    "مرداد", "شهریور", "مهر", "آبان",
    "آذر", "دی", "بهمن", "اسفند"
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const clickHandler = () => {
    if (!day || !month || !year) {
      Swal.fire({
        icon: "warning",
        title: "خطا!",
        text: "لطفاً همه فیلدها را پر کنید",
        confirmButtonText: "باشه",
      });
      return;
    }

    // تبدیل ماه شمسی به عدد
    const monthIndex = persianMonths.indexOf(month) + 1;

    // تبدیل تاریخ شمسی به میلادی
    const { gy, gm, gd } = jalaali.toGregorian(
      parseInt(year),
      monthIndex,
      parseInt(day)
    );

    const birthDate = new Date(gy, gm - 1, gd);
    const today = new Date();

    // محاسبه سن دقیق
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    const d = today.getDate() - birthDate.getDate();
    if (m < 0 || (m === 0 && d < 0)) age--;

    Swal.fire({
      icon: "success",
      title: "نتیجه:",
      html: `
        <p>سن شما: <b>${age}</b> سال</p>
        <p>تاریخ میلادی: <b>${gy}/${gm}/${gd}</b></p>
      `,
      confirmButtonText: "باشه",
    });
  };

  return (
    <div className="gradient-background min-h-screen lalezar text-[25px]">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
        <h1 className="text-2xl font-bold mb-6 text-white">
          محاسبه سن و تبدیل تاریخ
        </h1>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex flex-col gap-4">
          {/* Day Select */}
          <div className="flex flex-col">
            <label htmlFor="day" className="mb-1 font-medium text-right">
              روز رو انتخاب کن:
            </label>
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
            >
              <option value="">-- انتخاب کن --</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Month Select */}
          <div className="flex flex-col">
            <label htmlFor="month" className="mb-1 font-medium text-right">
              ماه رو انتخاب کن:
            </label>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
            >
              <option value="">-- انتخاب کن --</option>
              {persianMonths.map((m, index) => (
                <option key={index} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Year Input */}
          <div className="flex flex-col">
            <label htmlFor="year" className="mb-1 font-medium text-right">
              سال رو وارد کن:
            </label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="مثلاً 1380"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
            />
          </div>

          {/* Button */}
          <button
            className="bg-green-600 hover:bg-green-700 transition-all text-white font-bold py-3 rounded-2xl text-lg shadow-md mt-4"
            onClick={clickHandler}
          >
            محاسبه
          </button>
        </div>
      </div>
    </div>
  );
};

export default Time;
