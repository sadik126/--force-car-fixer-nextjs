"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Loginform() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            toast.error(res.error);
            setLoading(false);
        } else {
            toast.success('successfully logged in')
            router.push("/");
            form.reset()
            setTimeout(() => {
                router.push("/");
            }, 1500);// Redirect to dashboard on success
        }

        if (res.error) {
            setError(res.error); // Set error message

        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block font-medium text-gray-700">Email address</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                    required
                    disabled={loading}
                />
            </div>

            <div>
                <label className="block font-medium text-gray-700">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                    required
                    disabled={loading}
                />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
                id="login"
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-200"
            >
                {loading ? "Logging in..." : "Login"} {/* ✅ Show loading text */}
            </button>
        </form>
    );
}
