import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
  const {id,name,age}=await request.json();
  return NextResponse.json({
    id,name,age
  })
}