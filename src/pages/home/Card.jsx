import React from 'react';
import { WiTime3 } from "react-icons/wi";

const Card = () => {
  return (
    <div className='lalezar  w-44 borderm text-center flex flex-col items-center justify-center px-28 py-5 hover:my-box hover:text-pink-600'>
      <div className='icon text-[100px] flex items-center justify-center '>
        <WiTime3 />
      </div>
      <p className='text-[50px] '>زمان</p>
    </div>
  )
}

export default Card;
