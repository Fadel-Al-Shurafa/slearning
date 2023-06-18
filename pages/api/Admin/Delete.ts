import  prisma  from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { useSession, getSession } from 'next-auth/react'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
){ 

  const { userEmail } = await req.body;

  const user = await prisma.user.delete({
    where: {
      email: userEmail
    },
  })

  res.json(user);

}
