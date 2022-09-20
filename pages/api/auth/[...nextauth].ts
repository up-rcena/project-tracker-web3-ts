import CredentialsProvider from 'next-auth/providers/credentials';
import Moralis from 'moralis';
import NextAuth, { ISODateString } from 'next-auth';

export type TUserData = {
  address: string;
  network: string;
  signature: string;
  profileId: string;
  expirationTime: ISODateString;
};

export interface ISession {
  user: TUserData;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'MoralisAuth',
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0',
        },
      },
      async authorize(credentials) {
        try {
          const { message, signature } = credentials as Record<string, string>;

          await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

          const { address, network, profileId, expirationTime, uri } = (
            await Moralis.Auth.verify({ message, signature, network: 'solana' })
          ).raw;

          const nextAuthUrl = process.env.NEXTAUTH_URL;

          if (uri !== nextAuthUrl) {
            return null;
          }

         
          const user = { address, network, profileId, expirationTime, signature };

          return user;
        } catch (error) {
          console.error('Catch Exception: ', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.expires = (token as unknown as ISession).user.expirationTime;
      (session as unknown as ISession).user = (token as unknown as ISession).user;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
});
