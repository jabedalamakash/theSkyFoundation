 import fetchData from "@/components/ResponseData";
import { NextResponse } from "next/server";

 
 export async function GET(req) {
    const resData= await fetchData();
    const data= resData.donationData;    
    const url=req.nextUrl;
    // console.log(url.searchParams);
    const query= url.searchParams.get("query");
    // console.log(query);
    if(filterData){
        return NextResponse.json(filterData);
    }
    else{
        return NextResponse.json(data);

}

    const filterData=data.filter((item)=>{
        // return item.category.toLowerCase()==query.toLowerCase();
        return item.category.toLowerCase().incluedes(query.toLowerCase());
    })
    return NextResponse.json(filterData);



    
 }