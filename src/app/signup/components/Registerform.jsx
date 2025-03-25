"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Registerform() {
    const [agree, setAgree] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value


        fetch('https://backend-z7le.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Registration Successful!");
                    form.reset();
                }
            })
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input name="name" type="text" placeholder="Enter name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Email Field */}
            <div>
                <label className="block text-gray-700 font-medium">Email address</label>
                <input name="email" type="email" placeholder="Enter email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <p className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</p>
            </div>

            {/* Password Field */}
            <div>
                <label className="block text-gray-700 font-medium">Password</label>
                <input name="password" type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">Accept Terms and Conditions</label>
            </div>

            {/* Register Button */}
            <button type="submit" className={`w-full py-2 text-white rounded-lg transition duration-300 ${agree ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`} disabled={!agree}>
                Register
            </button>
        </form>
    )
}
