// import "next-auth/jwt"

// // Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

// declare module "next-auth/jwt" {
//   interface JWT {
//     /** The user's role. */
//     userRole?: "admin"
//   }
// }
import {Role} from '@prisma/client'
import type {user} from 'next-auth'
import 'next-auth/jwt'


type UserId = string

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    id: UserId
    role: Role
  }
}

declare module "next-auth" {
    interface Session {
      user: User & {
        id: UserId
        role: Role
      }
    }
  }