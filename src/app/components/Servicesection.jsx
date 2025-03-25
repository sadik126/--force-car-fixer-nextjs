import dbConnect from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react'
import Loading from '../services/[id]/Loading';

export default function Servicesection() {

    // const data = await dbConnect('services').find({}).toArray();

    // return {
    //     props: {
    //         data: JSON.parse(JSON.stringify(data)),
    //     },
    // };




    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://backend-z7le.onrender.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className="text-center mt-5 mb-2 text-orange-500">service</p>
            <h1 className="text-3xl md:text-7xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold font-bold text-center my-3">Our Service Area</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>

            <div className='grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
                {services.map(service => (
                    <div key={service._id} className="relative w-96 bg-black text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 overflow-hidden">

                        {/* 🔥 Red & Black Gradient Border */}
                        {/* <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-red-600 to-yellow-500 opacity-25 rounded-2xl"></div> */}
                        <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-red-600 to-yellow-500 opacity-25 rounded-2xl pointer-events-none"></div>


                        {/* 📸 Image Section */}
                        <figure className="relative w-full h-56 overflow-hidden">
                            <Image
                                src={service?.img}
                                alt={service?.title || "Service Image"}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </figure>

                        {/* 📌 Service Details */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-yellow-400">{service.title}</h2>
                            <p className="text-gray-300 text-sm mt-2">
                                Get expert car servicing with top-notch mechanics and premium parts.
                            </p>

                            {/* 💰 Price & Button Section */}
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-bold text-red-500">${service.price}</span>
                                <Link href={`/services/${service._id}`} >
                                    <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-black font-bold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200">
                                        View Details
                                    </button>
                                </Link>

                            </div>

                            {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}
