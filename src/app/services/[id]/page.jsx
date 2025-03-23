"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';
import Link from 'next/link';
import { Car } from 'lucide-react';


export default function Servicesdetails() {
    const { id } = useParams(); // ✅ Next.js থেকে id পাওয়া
    const [service, setService] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:6090/services/${id}`)
                .then(res => res.json())
                .then(data => setService(data))
                .catch(err => console.error(err));
        }
    }, [id]);

    if (!service) return <Loading></Loading>;


    // if (!service) return <p className="text-center mt-10">Loading...</p>;
    return (
        <div>
            <section className='flex justify-center'>
                <figure className='relative '>
                    <Image src={"/assets/images/checkout/checkout.png"} width={1137} height={300} alt='banner'></Image>
                    <div className='absolute transparent-layer overlay-bg w-full h-full border-2 border-red-400 top-0 rounded-lg'>

                        <div className='w-full h-full flex items-center ps-10'>
                            <div>
                                <h1 className='text-white font-mono font-extrabold text-5xl'>Service Details</h1>
                            </div>



                        </div>
                        <div className="bg-red-600 text-white text-sm py-3 px-6 rounded-b-lg flex justify-center">
                            <ul className="flex items-center space-x-2">
                                <li>
                                    <Link href="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <span>/</span>
                                <li>
                                    <Link href="/services" className="hover:underline">
                                        Services
                                    </Link>
                                </li>
                                <span>/</span>
                                <li className="text-gray-300">Service Details</li>
                            </ul>
                        </div>


                    </div>
                </figure>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1137px] mx-auto mt-16 px-4">
                {/* Left Section (Service Details) */}
                <div className="lg:col-span-2">
                    {/* Image Section */}
                    <figure className="relative w-full h-64 md:h-80 lg:h-96">
                        <Image src={service?.img} alt={service?.title} layout="fill" objectFit="cover" className="rounded-lg" />
                    </figure>

                    {/* Title & Description */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-mono my-6 uppercase">
                        {service?.title}
                    </h1>
                    <p className="text-gray-700 text-base md:text-lg">{service?.description}</p>

                    {/* Facilities List */}
                    <ul className="bg-white shadow-md rounded-lg p-4 mt-6">
                        <li className="pb-2 text-xs opacity-60 tracking-wide">Facilities of this service</li>
                        {service?.facility?.map((feature, index) => (
                            <li key={index} className="flex justify-between items-center p-3 border-b">
                                <div>
                                    <div className="text-lg font-semibold">{feature.name}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">{feature.details}</div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="btn btn-sm btn-square btn-ghost">
                                        <Car />
                                    </button>
                                    <button className="btn btn-sm btn-square btn-ghost">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section (Pricing) */}
                <div className="lg:col-start-3 text-3xl md:text-4xl lg:text-5xl font-mono font-extrabold text-center">
                    <p className="mb-6">Price: <span className="text-amber-700">${service?.price}</span></p>
                    <button className="btn btn-lg md:btn-md lg:btn-lg bg-amber-700 text-white w-full py-3 md:py-2 lg:py-4 rounded-md">
                        Checkout
                    </button>
                </div>
            </div>

            {/* <p>{service?.title}</p> */}
        </div>
    )
}
