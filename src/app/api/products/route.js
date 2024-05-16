import { NextResponse } from "next/server";

export async function GET(req){
   // console.log(NextResponse);
   // console.log("hai jee",req);
//  const requestHeaders = new Headers(req.headers);
//  console.log(requestHeaders);

const { searchParams } = new URL(req.url);
console.log(searchParams.rani);
   
   return NextResponse.json({"raja" : "dolly"});
}