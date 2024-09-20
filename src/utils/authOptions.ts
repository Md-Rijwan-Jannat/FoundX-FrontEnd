import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_FACEBOOK_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_FACEBOOK_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
