import  prisma  from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
){ 

    const userId = req.query.id
    console.log(userId)
    const {title , content } = await req.body;
    // const hashed_password = await hash(Pass, 12);

    const user = await prisma.user.update({
      where: {
        id: 1
      },
      data: {
        QuestionPosts: {
          create: {
            title: title,
            content: content
          },
        },
      }
    })

    res.json(user);


}
