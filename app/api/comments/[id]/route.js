import connectMongoDB from "@/libs/mongodb"
import Comments from "@/models/comments"
import { NextResponse } from "next/server"

export async function PUT(request, {params}) {
    const {id} = params
    const {newComment : comment} = await request.json()
    await connectMongoDB()
    await Comments.findByIdAndUpdate(id,{comment})
    return NextResponse.json({messege : "Comment updated"}, { status : 200})
}
export async function GET(request, {params}) {
    const {id} = params
    await connectMongoDB()
    const comment = await Comments.findOne({_id : id}) 
    return NextResponse.json({comment}, { status : 200})
}