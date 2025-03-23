import loginUser from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

                const res = await fetch("http://localhost:6090/login", {
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

                // fetch('http://localhost:6090/login', {
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
    ],
    pages: {
        signIn: "/login",
    },
    debug: true, // Debug mode on
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
