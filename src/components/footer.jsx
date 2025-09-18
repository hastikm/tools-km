// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-70 text-white py-8 px-6 mt-10">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Km Tools</h2>
        <p className="mb-4 text-gray-200 lalezar">
          Km Tools یک سایت کاربردی است که مجموعه‌ای از ابزارهای روزمره و مفید را در اختیار شما قرار می‌دهد.
          هدف ما ساده کردن کارهای روزانه و فراهم کردن دسترسی سریع به ابزارهای متنوع است.
          شما می‌توانید با استفاده از این ابزارها در وقت خود صرفه‌جویی کنید و کارهای دیجیتال خود را آسان‌تر انجام دهید.
          این سایت برای همه کاربران علاقه‌مند به ابزارهای کاربردی و ساده طراحی شده است.
        </p>
        <p className="text-gray-400 text-sm">
          © 2025 Km Tools. تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
