import { getDb } from "@/db";
import { subscribers } from "@/db/schema";
import { savePrivateSubmission } from "@/lib/submission-store";
const emailRx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:Request){try{const p=await request.json() as {email?:string;website?:string};const email=p.email?.trim().toLowerCase();if(p.website)return Response.json({message:"You’re on the list."},{status:201});if(!email||!emailRx.test(email)||email.length>180)return Response.json({error:"Please enter a valid email address."},{status:400});const stored=await savePrivateSubmission("newsletter",{email});if(!stored)await getDb().insert(subscribers).values({email}).onConflictDoNothing();return Response.json({message:"You’re on the list."},{status:201})}catch(e){console.error("newsletter",e);return Response.json({error:"We could not add you right now. Please try again."},{status:500})}}
