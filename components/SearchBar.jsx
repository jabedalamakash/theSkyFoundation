"use client"

import { useState } from "react";
import fetchFunc from "./fetch/FetchFunc";


// const fetchFunc=async()=>{
//     const req= await fetch(`/api/search?${query}`)
// }


export default function SearchBar() {
    const [query, setQuery] = useState([]);
    const res=fetchFunc(`https://theskyfoundation.vercel.app/api/search?${query}`)
    // console.log(res);

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(query);
     setQuery(" ");
  }
  const handleChange=(e)=>{
     setQuery(e.target.value);
    //  console.log(query);


  }
  return (
    <div className="flex justify-center">
      <input
        type="text" value={query} onChange={handleChange}
        className="border w-[70%] sm:w-[40%] rounded-l-md  px-5 py-2 border-gray-600 focus:outline-none"
      />
      <button onClick={handleSubmit} 
       className="bg-[#FF444A] px-6 py-2 rounded-r-md text-center text-white">
        Search
      </button>
    </div>
  );
}
