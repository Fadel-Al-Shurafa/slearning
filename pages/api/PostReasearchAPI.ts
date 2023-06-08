import  prisma  from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
){ 
 
    const {title } = await req.body;
    // const hashed_password = await hash(Pass, 12);

    const user = await prisma.user.update({
      where: {
        email: 'Test2@prisma.io'
      },
      data: {
        posts: {
          create: {
            title: title,
          },
        },
      }
    })

    res.json(user);


}
