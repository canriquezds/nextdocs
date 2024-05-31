import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          hd: "spatialnetworks.com", // Restrict to your domain
        },
      },
    }),
  ],
})

export {handler as GET, handler as POST};