import  prisma  from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){ 
 
    const postId = req.query.id


    if (req.method === 'DELETE'){
        const post = await prisma.questionPost.delete({
            where: {
                id: Number(postId)
            }
        })
        res.json(post)
    }else {
        console.log("Post could not be creadted");
    }

    if (req.method === 'POST'){
        const post = await prisma.questionPost.findUnique({
            where: {
                id: Number(postId)
            }
        })
        res.json(post)
    }else {
        console.log("Post could not be creadted");
    }

}
