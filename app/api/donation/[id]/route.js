import { donationData } from "@/data/DonationData";
import { NextResponse } from "next/server";



export async function GET(req,res) {
    console.log(res.params.id);

    const data=donationData.filter((data)=>{
        return data.id === req.params.id;
    })
    if(data.length==0){
        return NextResponse.json({messege:"No Data Found"})
    
      }
      return NextResponse.json({data})
    
}