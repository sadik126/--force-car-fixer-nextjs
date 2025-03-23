import React from 'react'
import Loginform from './components/Loginform'
import Image from 'next/image'
import Sociallogin from './components/Sociallogin'

export default function Login() {
    return (
        <div id="container" className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
            {/* Left Side Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Image className="w-full h-auto rounded-lg shadow-md" width={500} height={500} src={'/assets/images/login/login.svg'} alt="Login" />
            </div>

            {/* Right Side Login Form */}
            <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">This is Login</h2>

                <Loginform></Loginform>

                {/* Links */}
                <Sociallogin></Sociallogin>
                <p className="mt-4 text-center">
                    Forgot Password?{" "}
                    <a href="#" className="text-red-500 hover:underline">
                        Reset password
                    </a>
                </p>
                <p className="mt-2 text-center">
                    New to  Car fixer?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register here
                    </a>
                </p>

                {/* Toast Notification */}
                {/* <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} /> */}
            </div>
        </div>
    )
}
