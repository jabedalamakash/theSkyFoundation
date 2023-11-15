
import { donationData } from "@/data/DonationData";
import { NextResponse } from "next/server";



export async function GET(req,res) {
    
    //  console.log(res.params.category);
     const {searchParams} = new URL(req.url);
     const query= searchParams.get("query");
     console.log(query);


    // const data=donationData.filter((donation)=>{
    //   donation.category == res.params.category || donation.category.includes(res.params.category)
    // }) 

    const filteredData= donationData.filter((item)=>{
      // item.category.toLowerCase() ==query.toLowerCase();
      return item.category.includes(query.toLowerCase())
    })
    console.log(filteredData);
    // || item.category.includes(query.toLowerCase())

    console.log(donationData.category);

    if(data.length==0){
        return NextResponse.json({data:"No Data Found"})
    
      }
      return NextResponse.json(filteredData)
    
}