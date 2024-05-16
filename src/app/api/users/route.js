import { NextResponse } from "next/server";

const getData = async ()=>{
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("Something went wrong");
    };
    return response.json();
    } catch (error) {
        console.log(error);
    };
};

const GET = async ()=>{
    const users = await getData();
    return NextResponse.json({data : users}, {status : 202, statusText : "laura loge mera"});
};

export {GET};