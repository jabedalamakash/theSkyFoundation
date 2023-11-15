import Image from 'next/image';
import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <>
        
            <main className='relative  w-full  box-border  '>
                <Image
                src={"/banner.png"}
                height={500}
                width={500}
                alt="banner image"
                priority
                className='w-full h-full object-cover object-center absolute  opacity-25'/>

                <div className='relative py-40 z-10 text-center '>
                    <h1 className=' font-bold tracking-widest  text-3xl sm:text-5xl mb-10'>I Grow By Helping People In Need</h1>
                    <div >
                        <SearchBar/>
                    </div>
                </div>


            </main>
            </>
            
            
    );
};

export default Hero;