import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { userEmail, EditName } = await req.body;



    // Make an Admin
    if (req.method === 'POST') {
        const user = await prisma.user.update({
            where: {
                email: userEmail
            },
            data: {
                name: EditName
            }
        })
        console.log(user)
    } else {
        console.log("somthing went wrong");
    }

}


