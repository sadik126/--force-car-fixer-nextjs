"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Registerform from './components/Registerform';

export default function Signup() {

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image Section */}
                <div>
                    <Image className="w-full h-auto rounded-lg shadow-md" width={500} height={500} src={'/assets/images/login/login.svg'} alt="Register" />
                </div>

                {/* Form Section */}
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-6">This is Register</h2>
                    <Registerform></Registerform>
                </div>
            </div>
        </div>

    )
}
