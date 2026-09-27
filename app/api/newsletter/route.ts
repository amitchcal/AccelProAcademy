import { getDb } from "@/db";
import { subscribers } from "@/db/schema";
const emailRx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:Request){try{const p=await request.json() as {email?:string};const email=p.email?.trim().toLowerCase();if(!email||!emailRx.test(email)||email.length>180)return Response.json({error:"Please enter a valid email address."},{status:400});await getDb().insert(subscribers).values({email}).onConflictDoNothing();return Response.json({message:"You’re on the list."},{status:201})}catch(e){console.error("newsletter",e);return Response.json({error:"We could not add you right now. Please try again."},{status:500})}}
