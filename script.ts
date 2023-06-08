import { PrismaClient} from '@prisma/client'


const prisma = new PrismaClient(/**{log: ["query"]}* */)

async function main() {
    await prisma.user.deleteMany()
    const newUser = await prisma.user.create({
      data: {
        Fname: 'test',
        Lname: 'test1',
        email: 'test@test.io',
        Pass: '12345',
        // images: {
        //   create: {
        //     title: 'Hello World',
        //   },
        // },
      },
    })

    console.log('Created new user: ', newUser)

  }
  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())