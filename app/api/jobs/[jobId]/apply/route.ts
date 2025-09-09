import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request:Request,
    {params}:{params:Promise<{jobId:string}>}){
    const session=await auth()
    if(!session?.user || !session?.user?.id){
        return NextResponse.redirect(new URL('/auth/sign', request.url))
    }

    try {
        const{jobId}=await params
       const job=await prisma.job.findUnique({
        where:{
            id:jobId
        }

       })
       if(!job){
        return  NextResponse.json('Job not Found',{status:400})
       }

       const existingApplication =await prisma.application.findFirst({
        where:{
            jobId:jobId,
            userId:session.user.id

        }
       })
       if (existingApplication) {
        return NextResponse.json('You already  applied for this job',{status:400}) 
        
       }
       const application=await prisma.application.create({
        data:{
            jobId,
            userId:session.user.id,
            status:"PENDING"
        }
       })


        return NextResponse.json(application)
    } catch (error) {
        console.error("error creatring jobs",error)

        return NextResponse.json({
            message:"Internal Server Error"
        },{status:500})
        
    }
}