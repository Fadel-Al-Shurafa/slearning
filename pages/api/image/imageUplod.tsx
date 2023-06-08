// import type { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '../../../lib/prisma';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const { image } = req.body as { [key: string]: any };

//     if (!image) {
//       return res.status(400).json({ error: 'Image file required' });
//     }

//     const { name, data } = image;


//     const savedImage = await prisma.image.create({
//       where: {
//         id: 2
//       },
//       data: {
//         Images: {
//           create: {
//             image: data,
//           },
//         },
//       }
//     })

//     res.status(201).json(savedImage);
//   } catch (error) {
//     res.status(500).json({ error: 'Error uploading image' });
//   }
// }