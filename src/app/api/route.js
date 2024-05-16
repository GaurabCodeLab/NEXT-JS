import { NextResponse } from "next/server";

const GET = async ()=>{
    return NextResponse.json({"raja" : "dolly"}, {status : 202, statusText : "laura hua"});
};

export {GET};