import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import GitHubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
import GoogleProvider from 'next-auth/providers/google'
import Auth0Provider from 'next-auth/providers/auth0'

import clientPromise from './lib/mongodb'

export default NextAuth({
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: '/signin',
  },
  secret: 'secret',
})
