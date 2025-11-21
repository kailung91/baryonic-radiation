import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "client@iat.ua" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Mock authentication for MVP
                if (credentials?.username === "client@iat.ua" && credentials?.password === "demo123") {
                    return { id: "1", name: "IAT Partner", email: "client@iat.ua" }
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
    },
    theme: {
        colorScheme: "dark",
    },
    callbacks: {
        async session({ session, token }) {
            return session
        },
    }
})

export { handler as GET, handler as POST }
