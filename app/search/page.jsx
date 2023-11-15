/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import fetchData from '@/components/ResponseData';
import { useSearchParams } from 'next/navigation'


export default function page() {
    const search=useSearchParams();
    // const resData= await fetchData();
    // const data=resData.donationData;

   
    //  const dataSearch=search.get("query");
    //  const filteredData=data.filter((item)=>{
    //     return item.category==search;
    // });
    // console.log(filteredData);

  return (
    <div className='my-20 px-5 w-[100%] sm:px-0 sm:w-[80%] mx-auto'>
        <h1>Your are Search  for {search}:</h1>
        <p></p>
    
    </div>
  )
}
