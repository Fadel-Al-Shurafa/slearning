import { PrismaClient } from '@prisma/client';
declare global{
    namespace NodeJS {
        interface Global{}
    }
}

interface CustomNodeJsGlobal extends NodeJS.Global{
    prisma: PrismaClient
}

declare const global: CustomNodeJsGlobal

const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma

// import { PrismaClient } from '@prisma/client';



// declare global{
//     var prisma: PrismaClient | undefined;
// }

// export const prisma = global.prisma || new PrismaClient();

// if(process.env.NODE_ENV === "production") global.prisma = prisma;
