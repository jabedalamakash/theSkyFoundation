'use client'

import StatisticsData from '@/components/StatisticsData';

const page = () => {
    return (
        <section className='w-full sm:w-[80%] mx-auto h-screen  px-5 sm:px-0'>
            <main className='my-20'>
            <StatisticsData/>
            </main>
        </section>
    );
};

export default page;