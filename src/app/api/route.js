import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const GET = (req, context)=>{
    // console.log(req);
    // console.log("method hai", req.method);
    
    // Get headers:-
    // const reqHeaders = new Headers(req.headers);
    // console.log(reqHeaders);

    // Query Params:- url is http://localhost:3000/api?ram=sita
    // const reqParams = new URL(req.url);
    // console.log(reqParams.searchParams);
    // console.log(reqParams.searchParams.get("ram"));  result - sita
    
    // Cookies:-
    // const cook1 = req.cookies;
    // console.log(cook1);
    // const cook2 = cookies();
    // console.log(cook2);
    return NextResponse.json({"msg" : "success"}, {status : 200, statusText : "ok"});
};

export { GET };

const POST = async (req)=>{
// to get body of request
// const body = await req.json();
// console.log(body);

// to get form data
// we have to pass data as form data (we can do from postman)
const body = await req.formData();
console.log(body);     // FormData { [Symbol(state)]: [ { name: 'ram', value: 'accha hai' } ] }
console.log(body.get("ram"));    // accha hai

return NextResponse.json({"msg": "ye post request hai"});
};

export { POST };