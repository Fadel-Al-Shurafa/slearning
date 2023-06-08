import  prisma from '../../../lib/prisma';


export default async function handler(req, res) {
  const imageId = parseInt(req.query.id);

  try {
    const image = await prisma.image.findUnique({ where: { id: imageId } });

    if (!image) {
      res.status(404).json({ message: 'Image not found' });
      return;
    }

    res.setHeader('Content-Type', 'image/jpeg');
    res.send(image.image);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}