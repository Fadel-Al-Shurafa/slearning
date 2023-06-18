import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { MakeAdmin, RemoveAdmin } = await req.body;



    // Make an Admin
    if (req.method === 'POST') {
        const user = await prisma.user.update({
            where: {
                email: MakeAdmin
            },
            data: {
                role: 'ADMIN'
            }
        })
        console.log(user)
    } else {
        console.log("you have make new Admin");
    }

    
    // Delete an Admin

    if (req.method === 'DELETE') {
        const user = await prisma.user.update({
            where: {
                email: RemoveAdmin
            },
            data: {
                role: 'BASIC'
            }
        })
        console.log(user)
    } else {
        console.log("you have removed an Admin");
    }

}


