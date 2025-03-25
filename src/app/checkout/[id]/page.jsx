'use client'
import { useSession } from 'next-auth/react';
import Loading from './Loading';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';

export default function checkOut() {
    const { id } = useParams(); // ✅ Next.js থেকে id পাওয়া
    const [service, setService] = useState(null);
    const { data } = useSession();
    console.log(data)

    const { _id, title, description, img, price, facility } = service || {};


    useEffect(() => {
        if (id) {
            fetch(`https://backend-z7le.onrender.com/services/${id}`)
                .then(res => res.json())
                .then(data => setService(data))
                .catch(err => console.error(err));
        }
    }, [id]);

    const handleBooking = async (event) => {
        event.preventDefault();
        const newBooking = {
            email: data?.user?.email,
            name: data?.user?.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            date: event.target.date.value,
            serviceTitle: title,
            serviceID: _id,
            price: price,
        }

        const resp = await fetch('https://backend-z7le.onrender.com/booking', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: {
                "content-type": "application/json"
            }
        })
        const response = await resp?.json()
        console.log(response)
        if (response.
            acknowledged
        ) {
            toast.success('successfully booked this item')
        }

        event.target.reset()

    };


    if (!service) return <Loading></Loading>;
    return (

        <div className="container mx-auto">
            <ToastContainer />
            {/* <div className="relative  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={img}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        Checkout {title}
                    </h1>
                </div>
            </div> */}
            <section className="flex justify-center">
                <figure className="relative w-full">
                    {/* <Image src={img} width={1137} height={300} alt="banner" loading="eager" className="w-full h-auto rounded-lg" /> */}
                    <img src={img} alt="" className="w-full h-72 rounded-lg" />

                    {/* Overlay Layer */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
                        <div className="w-full h-full flex items-center ps-10">
                            <div>
                                <h1 className="text-white font-mono font-extrabold text-5xl">{title}</h1>
                            </div>
                        </div>

                        {/* Breadcrumb */}
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

            <div className="my-12 bg-white p-12 rounded-lg">
                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>
                            </label>
                            <input
                                defaultValue={data?.user?.name}
                                type="text"
                                name="name"
                                className="input input-bordered w-full input-primary"
                            />
                        </div>

                        {/* Date */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Date</span>
                            </label>
                            <input
                                defaultValue={new Date().toISOString().split("T")[0]}
                                type="date"
                                name="date"
                                className="input input-bordered w-full input-primary"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input
                                defaultValue={data?.user?.email}
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered w-full input-primary"
                            />
                        </div>

                        {/* Due Amount */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Due Amount</span>
                            </label>
                            <input
                                defaultValue={price}
                                readOnly
                                type="text"
                                name="price"
                                className="input input-bordered w-full input-secondary"
                            />
                        </div>

                        {/* Phone */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Phone</span>
                            </label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                placeholder="Your Phone"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Address */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Present Address</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">
                            Order Confirm
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
