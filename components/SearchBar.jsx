"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar() {
    const router=useRouter()
    const [query, setQuery] = useState([]);

  const handleSubmit=async (e)=>{
    e.preventDefault();
    // const req=  await fetch(`https://theskyfoundation.vercel.app/api/search/query=${query}`)
    // const data= req.json();
    router.push(`/search?${query}`)
    // alert(query);
     setQuery(" ");
  }
  const handleChange=(e)=>{
     setQuery(e.target.value);
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
