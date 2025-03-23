"use client";  // 👈 Add this line at the top

import Link from "next/link";
import { usePathname } from "next/navigation"; // Next.js 13+ uses `usePathname()`

const Breadcrumb = () => {
    const pathname = usePathname(); // 👈 Correct hook for App Router
    const pathSegments = pathname.split("/").filter((seg) => seg);

    return (
        <nav className="text-white text-lg">
            <ul className="flex items-center">
                <li>
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    return (
                        <li key={index} className="flex items-center">
                            <span className="mx-2">/</span>
                            {!isLast ? (
                                <Link href={path} className="text-gray-300 hover:text-white">
                                    {segment}
                                </Link>
                            ) : (
                                <span className="text-red-500">{segment}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
