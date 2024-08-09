import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google  from "next-auth/providers/google";
import { db } from "../../db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    adapter: DrizzleAdapter(db),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "database",
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    },
    pages: {
        signIn: "/auth/sign-in",
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
    ],
    callbacks: {
        // async jwt({ token, user }) {
        //     if (user) {
        //         return {
        //             ...token,
        //             id: user.id,
        //         };
        //     }
        //     return token
        // },
async session({ session, token }) {
    console.log("session callback", { session, token });
    if (token) {
        return {
            ...session,
            user: {
                ...session.user,
                id: token.id as string,
            },
        };
    }
    return session;
}
    },
})