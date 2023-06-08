import  prisma  from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
){ 

    
    const {chatMassge } = await req.body;
    // const hashed_password = await hash(Pass, 12);

    const chat = await prisma.chatText.create({
      data:{
        chat: chatMassge
      }
    })

    res.json(chat);


}
