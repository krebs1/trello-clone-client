import {AuthOptions} from 'next-auth'
import Google from 'next-auth/providers/google'
import {MongoDBAdapter} from '@auth/mongodb-adapter'
import clientPromise from '@/src/shared/lib/next-auth/adapters/mongodb/connection'

export const authCfg: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: '/(.)login'
  },
  callbacks: {
    session: async ({session, token, user}) => {
      if (session?.user) {
        // @ts-ignore
        session.user.id = user.id
      }
      return session
    },
  },
}
