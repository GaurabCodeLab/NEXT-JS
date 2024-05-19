import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import User from "@/model/user";

const GET = async (req, context)=>{
  await dbConnection();
  try {
    const id = context.params.id;
    const user = await User.findOne({_id: id});
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({"error": error});
  }
};

const PUT = async (req, context)=>{
  await dbConnection();
  try {
    const id = context.params.id;
    const body = await req.json();
    const replacedUser = await User.findOneAndReplace({_id: id}, body, {new: true, upsert: false});
    return NextResponse.json(replacedUser);
  } catch (error) {
    return NextResponse.json({"error": error});
  }
};

const PATCH = async (req, context)=>{
    await dbConnection();
    try {
        const id = context.params.id;
        const body = await req.json();
        const updatedUser = await User.findOneAndUpdate({_id: id}, body, {new: true, upsert: false});
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({"error": error});
    }
};

const DELETE = async (req, context)=>{
    await dbConnection();
    try {
        const id = context.params.id;
        const deletedUser = await User.findOneAndDelete({_id: id});
        return NextResponse.json(deletedUser);
    } catch (error) {
        return NextResponse.json({"error": error});
    }
}

export { GET, PUT, PATCH, DELETE };
