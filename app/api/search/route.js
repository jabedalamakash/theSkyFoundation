import { NextResponse } from "next/server";
import { donationData } from "@/data/DonationData";

export async function GET() {
    return NextResponse.json({donationData})
    
} 