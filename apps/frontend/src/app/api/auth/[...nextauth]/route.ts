import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:     process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  // Tell NextAuth to send errors back to your custom /login page instead of /api/auth/error
  pages: {
    signIn: '/login',
    error:  '/login', // <--- redirect any error (including provider errors) to /login
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        // You could also store profile.email or profile.sub here if you need
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user = {
        name:  session.user?.name || token.name || token.sub,
        email: session.user?.email,
      };
      return session;
    },
  },

  // Use NEXTAUTH_SECRET from your environment
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
