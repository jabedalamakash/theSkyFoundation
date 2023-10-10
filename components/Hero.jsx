import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <>
        
            <main className='relative  w-full  box-border  '>
                <Image
                src={"/banner.png"}
                height={500}
                width={500}
                alt="banner image"
                className='w-full h-full object-cover object-center absolute  opacity-25'/>

                <div className='relative py-40 z-10 text-center '>
                    <h1 className=' font-bold tracking-widest  text-3xl sm:text-5xl mb-10'>I Grow By Helping People In Need</h1>
                    <div className='flex justify-center '>
                        
                        <input type="text" className='border w-[70%] rounded-l-md sm:w-[40%] px-5 py-2 border-gray-600 focus:outline-none' />
                        <button className='bg-[#FF444A] px-6 py-2 rounded-r-md text-center text-white'>Search</button>
                    </div>
                </div>


            </main>
            </>
            
            
    );
};

export default Hero;