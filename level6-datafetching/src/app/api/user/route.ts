import { NextRequest, NextResponse } from "next/server";

export async function GET(requesr:NextRequest){
  return NextResponse.json({
    name:"arsalan",
    age:20
  })
}