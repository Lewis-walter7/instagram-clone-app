import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import prisma from '@/app/lib/prismadb'

export async function getSession() {
    return await getServerSession(handler)
}


export default async function getCurrentUser(){
    try {
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }
    
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        });
    
        if(!user) {
            return null;
        }
    
        return user;
    } catch (error) {
        return null;
    }
}