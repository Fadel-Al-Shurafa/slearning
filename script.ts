import { PrismaClient} from '@prisma/client'


const prisma = new PrismaClient(/**{log: ["query"]}* */)

async function main() {
    
    await prisma.chatText.deleteMany()

    const user = await prisma.user.update({
      where: {
        email: 'fadeluhb@gmail.com'
      },
      data: {
        role: 'ADMIN'
      }
    })
    console.log(user)
  }
 
  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())