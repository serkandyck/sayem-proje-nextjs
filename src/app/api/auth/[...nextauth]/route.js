const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import { compare } from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        console.log('Credentials', credentials)
        if (!credentials.username || !credentials.password) {
          return null
        }

        const user = await prisma.Admin.findUnique({
          where: {
            username: credentials.username
          }
        })


        if (!user) {
          return { errors: user.errors, status: false }
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return { errors: user.errors, status: false }
        }

        return {
          id: user.id + '',
          username: user.username,
          name: user.name,
          randomKey: 'Hey cool'
        }
      }
    })
  ],

  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
    },

    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const u = user
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }