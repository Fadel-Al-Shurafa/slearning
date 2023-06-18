import  prisma  from "../../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){ 
 
    const chatId = req.query.id
    const {userEmail, chatMassge } = await req.body;

// Delete Chat 
    if (req.method === 'DELETE'){
        const chat = await prisma.chatText.delete({
            where: {
                id: String(chatId)
            }
        })
        res.json(chat)
    }else {
        console.log("chat could not be creadted");
    }

}
