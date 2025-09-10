import React from 'react'
import '../QRcode/Qr.css'
import Navbar from "../../components/navbar";
const Qr = () => {
  return (
<div className="gradient-background1 w-screen h-screen">
  <Navbar />

   <div className="container mx-auto py-12 lalezar text-[30px] mt-14">
    <h1 className='text-center'>ساخت کیو آر کد QR Code برای اینستاگرام، تلگرام، کارت ویزیت و غیره </h1>

    <div className=" w-[800px] h-auto bg-slate-50  m-auto py-6 mt-12">
     <h1 className='text-black text-[24px] pr-5 '>برای ساخت کیو آر کد  اطلاعات کادر زیر را وارد کنید و بر روی دکمه ساخت کیو آر کد کلیک کنید.</h1>
     <hr className='border-b-8'/>
     <p className='text-black py-5 pr-5'>متن *</p>
     <div className='pr-5 pl-5'>
     <input type="text" className='bg-slate-300 w-full outline-none focus:outline-none h-32 text-black'/>
      </div>
   </div>



   </div>

   

</div>

  )
}

export default Qr;
