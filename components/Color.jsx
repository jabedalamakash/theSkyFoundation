import React from 'react';

const Color = () => {
    return (
      <div>
        <p className="bg-[#D9E5FF] hover:bg-blue-600 text-blue-600"></p> 
        <span className='bg-[#AEC8FF]'></span>
        <span className='bg-[#FEEAE3]'></span>
        <span className='bg-[#FFE3E4]'></span>
        <span className='bg-lime-100'></span>

        <p className=" hover:bg-[#FDD2C4] text-orange-400 bg-orange-400 "></p>
        <p className=" hover:bg-[#FFC3C5] text-[#FF444A] bg-[#FF444A]"></p>
        <p className=" hover:bg-lime-200 text-lime-500 bg-lime-500 "></p>
      </div>
    );
};

export default Color;