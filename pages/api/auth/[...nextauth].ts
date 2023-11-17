import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  debug: true,
}

export default NextAuth(authOptions)
