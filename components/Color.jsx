import React from 'react';

const Color = () => {
    return (
      <div>
        <p className="bg-[#D9E5FF] hover:bg-blue-600 text-blue-600">i</p> 
        <span className='bg-[#AEC8FF]'>he</span>
        <span className='bg-[#FEEAE3]'>hi</span>
        <span className='bg-[#FFE3E4]'>ho</span>
        <span className='bg-lime-100'>hello</span>

        <p className=" hover:bg-[#FDD2C4] text-[#F87147] bg-[#F87147]  ">am</p>
        <p className=" hover:bg-[#FFC3C5] text-[#FF444A] bg-[#FF444A]">ak</p>
        <p className=" hover:bg-lime-200 text-lime-500 bg-lime-500 ">ash</p>
      </div>
    );
};

export default Color;