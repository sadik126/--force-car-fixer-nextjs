import React from 'react'
import Image from "next/image";

export default function Smallbanner() {
    return (
        <div className="container mx-auto my-10 px-4">
            <div className="flex flex-col md:flex-row items-center">
                {/* Left Side - Image Section */}
                <div className="md:w-1/2 relative flex justify-center">
                    {/* Person Image */}
                    <div className="relative w-3/4 h-auto">
                        <Image
                            src={'/assets/images/about_us/car1.jpg'}
                            alt="Person"
                            className="rounded-lg"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>

                    {/* Parts Image (Absolute Positioning) */}
                    <div className="absolute right-[74px] bottom-[-38px] w-1/2">
                        <Image
                            src={'/assets/images/about_us/parts.jpg'}
                            alt="Parts"
                            className="rounded-lg"
                            width={250}
                            height={250}
                            layout="responsive"
                        />
                    </div>
                </div>

                {/* Right Side - Text Section */}
                <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
                    <small className="text-orange-500 font-semibold">About us</small>
                    <h1 className="text-3xl md:text-7xl font-extrabold leading-tight uppercase mt-2">
                        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold"> We are qualified</span>  <br /> & have experience <br /> in this field
                    </h1>
                    <p className="py-3 text-gray-700">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="py-3 text-gray-700">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-600 transition">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    )
}
