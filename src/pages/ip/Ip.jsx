import React, { useState, useEffect } from 'react';
import '../ip/ip.css';
import Navbar from '../../components/navbar';
import axios from 'axios';

const Ip = () => {

  const [ipAddress , setIpAddress ] = useState('');
  const [browser , setBrowser ] = useState('');
  const [system , setSystem ] = useState('');
  const [buttonColor , setButtonColor ] = useState('bg-green-400')


const copyIpToClipboard = () => {
  if (ipAddress) {
    navigator.clipboard.writeText(ipAddress)
      .then(() => {
        setButtonColor('bg-black');
        setTimeout(() => {
          setButtonColor('bg-green-400');
        }, 1000);
      })
      .catch(() => {
        setButtonColor('bg-red-600');
        setTimeout(() => {
          setButtonColor('bg-green-400');
        }, 1000);
      });
  }
};


  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Windows") !== -1) setSystem("Windows");
    else if (userAgent.indexOf("Mac") !== -1) setSystem("MacOS");
    else if (userAgent.indexOf("Linux") !== -1) setSystem("Linux");
    else setSystem("نامشخص");

    if (userAgent.indexOf("Chrome") !== -1) setBrowser("Chrome");
    else if (userAgent.indexOf("Firefox") !== -1) setBrowser("Firefox");
    else if (userAgent.indexOf("Safari") !== -1) setBrowser("Safari");
    else setBrowser("نامشخص");

    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        setIpAddress(response.data.ip);
      })
      .catch(error => {
        console.error(error);
        setIpAddress("نامشخص");
      });
  }, []);





  return (
    <div className='gradient-background min-h-screen w-full'>
      <Navbar />

      <div className="flex flex-col items-center px-4 pt-24">
        {/* کل کادر سفید */}
        <div className='my-16 py-8 flex flex-col justify-start items-center bg-slate-200 rounded-3xl text-black w-full max-w-[900px] min-h-[500px]'>
          
          {/* عنوان */}
          <h1 className='lalezar text-[32px] md:text-[40px] mb-6 text-center'>
            آدرس آی پی من چیه؟
          </h1>
          
          {/* آی‌پی + دکمه */}
          <div className='flex flex-col sm:flex-row items-center sm:justify-center gap-4 mb-8 w-full'>
            <div className='w-full sm:w-[350px] h-[100px] bg-black text-center flex justify-center items-center'>
              <p className='text-[24px] md:text-[30px] text-green-300 font-extrabold'>
                {ipAddress || "در حال دریافت..."}
              </p>
            </div>

            <button  className={`${buttonColor} lalezar py-3 px-12 text-yellow-50 rounded-full transition duration-300 hover:scale-105 hover:shadow-xl`} onClick={copyIpToClipboard} >
              copy
            </button>
          </div>

          {/* سایر اطلاعات */}
          <div className='w-full flex flex-col items-center px-4'>
            <h2 className='lalezar text-[22px] md:text-[25px] mb-4 text-slate-700 text-center'>سایر اطلاعات</h2>

            <div className='bg-white rounded-xl shadow-md w-full max-w-[500px] text-[16px] md:text-[18px] overflow-hidden'>
              {/* سیستم عامل */}
              <div className='flex justify-between px-4 py-3 border-b border-gray-300'>
                <span className='font-bold'>سیستم عامل:</span>
                <span>{system || "در حال دریافت..."}</span>
              </div>

              {/* مرورگر */}
              <div className='flex justify-between px-4 py-3'>
                <span className='font-bold'>مرورگر:</span>
                <span>{browser || "در حال دریافت..."}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Ip;
