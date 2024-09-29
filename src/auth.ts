import {
  authSecret,
  googleClientId,
  googleClientSecret,
} from "./utils/constant";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: authSecret,
});
