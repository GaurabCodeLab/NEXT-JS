import { NextResponse } from "next/server";

const GET = (req, context)=>{
    console.log(context);
    // url http://localhost:3000/api/19
    // result in console { params: { id: '19' } }
    return NextResponse.json({"msg": "dynamic route hai"});
};

export { GET };