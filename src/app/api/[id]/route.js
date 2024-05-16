import { NextResponse } from "next/server";

const GET = async (req, {params})=>{
console.log(params.id);

    return NextResponse.json({"raja" : "dolly hai"}, {status : 210, statusText : "balle balle"});
};

export {GET};