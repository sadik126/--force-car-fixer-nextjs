import loginUser from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("Received Credentials:", credentials);

                const res = await fetch("https://backend-z7le.onrender.com/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(credentials),
                });

                const user = await res.json();

                if (!res.ok) {
                    throw new Error(user.message);
                }

                // Return user object (NextAuth will store this in session)
                return user;


                // if (!credentials?.email || !credentials?.password) {
                //     throw new Error("Missing credentials!");
                // }

                // const user = {
                //     id: "1",
                //     name: "John Doe",
                //     email: "john@gmail.com",
                //     password: "password123",
                // };

                // fetch('https://backend-z7le.onrender.com/login', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ credentials }),
                // })
                //     .then(res => res.json())
                //     .then(data => console.log(data))



                // if (user) {
                //     return user

                // } else {
                //     return null
                // }

                // if (
                //     credentials.email === user.email &&
                //     credentials.password === user.password
                // ) {
                //     return user;
                // }
                // throw new Error("Invalid email or password!");
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log({ user, account, profile, email, credentials })

            if (account) {
                const { providerAccountId, provider } = account
                const { email: user_email, image, name } = user

                const googleUser = {
                    image, name, email: user_email, provider, providerAccountId
                }

                try {
                    const res = await fetch("https://backend-z7le.onrender.com/google-login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(googleUser),
                    });

                    const data = await res.json();
                    if (!res.ok) throw new Error(data.message);
                    // / MongoDB theke asha user er ID store korbo
                } catch (error) {
                    console.error("Google login API error:", error);
                }
            }
            return true
        }
    },
    debug: true, // Debug mode on
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
