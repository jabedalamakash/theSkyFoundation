import React from 'react';
import fetchData from './ResponseData';
import Donation from '@/components/Donation';


const Donations = async() => {
    const result=await fetchData();
    const data = result.donationData;
    return (
        <div>
            <Donation data={data}/>
           
            
        </div>
    );
};

export default Donations;