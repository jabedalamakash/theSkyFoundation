import { donationData } from "@/data/DonationData";
import { NextResponse } from "next/server";



export async function GET(req,res) {
    console.log(res.params.id);

    const data=donationData.filter((donation)=> donation.id == res.params.id);

    if(data.length==0){
        return NextResponse.json({messege:"No Data Found"})
    
      }
      return NextResponse.json({data})
    
}