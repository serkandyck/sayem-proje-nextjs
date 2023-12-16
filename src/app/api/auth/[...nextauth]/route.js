const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import { compare } from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',

      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      async auth(credentials) {
        console.log('Credentials', credentials)
        if (!credentials.username || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
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
  },
  secret: process.env.JWT_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }