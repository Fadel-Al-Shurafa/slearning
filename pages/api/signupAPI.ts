// import  prisma  from "../../lib/prisma";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handle(
//   req: NextApiRequest,
//   res: NextApiResponse
// ){
 
//     const { Fname, Lname, email, Pass } = await req.body;
//     // const hashed_password = await hash(Pass, 12);

//     const user = await prisma.user.create({
//       data: {
//         Fname,
//         Lname,
//         email,
//         Pass,
//       },
//     });

//     res.json(user);


// }
