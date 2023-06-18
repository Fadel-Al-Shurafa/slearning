import  prisma  from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){ 
 
    const postId = req.query.id

    const {image, userEmail, chatMassge } = await req.body;

    // Delete Post
   
    if (req.method === 'DELETE'){
        const QuestionPosts = await prisma.questionPost.delete({
            where: {
                id: String(postId)
            }
        })
        res.json(QuestionPosts)
    }else {
        console.log("Post could not be creadted");
    }


// Create Chat
    if (req.method === 'POST'){
        const chat = await prisma.questionPost.update({
            where: {
                id: String(postId)
            },
            data: {
                Chats: {
                    create: {
                        email: userEmail,
                        chat: chatMassge,
                        image: image,
                    },
                },
            }
        })
      
        res.json(chat);
    }else {
        console.log("Chat could not be creadted");
    }

}
