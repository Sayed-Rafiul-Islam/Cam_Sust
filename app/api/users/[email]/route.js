import connectMongoDB from "@/libs/mongodb"
import Users from "@/models/users"
import { NextResponse } from "next/server"

export async function GET(request,{params}) {
    const {email} = params
    const filter = {email : email}
    await connectMongoDB()
    const {role} = await Users.findOne(filter)
    return NextResponse.json({role}, { status : 200})   
}