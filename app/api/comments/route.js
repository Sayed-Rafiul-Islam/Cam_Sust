import connectMongoDB from "@/libs/mongodb"
import Comments from "@/models/comments"
import { NextResponse } from "next/server"


export async function POST(request) {
    const {name, comment, slug} = await request.json()
    await connectMongoDB()
    await Comments.create({name,comment,slug})
    return NextResponse.json({messege : "Comment stored"}, { status : 201})
}
// export async function GET(request) {
//     await connectMongoDB()
//     const comments = await Comments.find()
//     return NextResponse.json({comments})
// }
export async function DELETE(request) {
    await connectMongoDB()
    const id = request.nextUrl.searchParams.get("_id")
    await Comments.findByIdAndDelete(id)
    return NextResponse.json({messege : "Comment Deleted"}, {status : 200})
}

export async function GET(request) {
    const slug =  request.nextUrl.searchParams.get('slug')
    const filter = {slug : slug}
    await connectMongoDB()
    const comments = await Comments.find(filter)
    return NextResponse.json({comments}, { status : 200})
}