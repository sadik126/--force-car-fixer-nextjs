import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
    // ✅ টোকেন চেক করো
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    console.log("Middleware Token:", token); // 👈 কনসোল চেক করো

    const pathname = request.nextUrl.pathname;

    // ✅ API রুট বাদ দাও
    if (pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    // ✅ প্রোটেক্টেড রুট চেক করো
    const protectedRoutes = ["/mybooking", "/checkout"];
    const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtected && !token) {
        return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/mybooking/:path*", "/checkout/:path*"],
};
