'use client'

import StatisticsData from '@/components/StatisticsData';

const page = () => {
    return (
        <section className='w-full sm:w-[80%] my-32 mx-auto px-5 sm:px-0'>
            <main className='w-full py-10'>
            <StatisticsData/>
            </main>
        </section>
    );
};

export default page;