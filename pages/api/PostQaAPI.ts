import  prisma  from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { useSession, getSession } from 'next-auth/react'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
){ 
  const session = await getSession({ req });

  const userId = req.query.id
  console.log(userId)
  const {userEmail ,title , content } = await req.body;

  const user = await prisma.user.update({
    where: {
      email: userEmail
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
