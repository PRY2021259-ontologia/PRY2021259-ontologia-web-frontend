import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import Auth0Provider from "next-auth/providers/auth0";
import Credentials from 'next-auth/providers/credentials';
import { baseUrl } from '../../../service/api';

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
    Credentials({
      name: 'apiCredentials',
      credentials: {
      },
      async authorize(credentials) {
        const listUsers = await baseUrl.get('/userlogins/')
        const isUserRegistered = listUsers.data.find(user => user.username === credentials.username)
        if (!isUserRegistered) return;
        return {
          username: isUserRegistered.username,
        }
      }
    })
  ],

  callbacks: {
    signIn: async (user) => {
      const listUsers = await baseUrl.get('/userlogins/')
      const isUserRegistered = listUsers.data.find(user => user.username === user.username)
      if (!isUserRegistered) return;
      return {
        username: isUserRegistered.username,
      }
    }
  }
})
