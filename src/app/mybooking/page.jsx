"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function page() {
    const [alllist, setallList] = useState([]);
    const { data: sessiondata, status } = useSession();
    console.log(sessiondata)


    const fetchdata = () => {


        fetch('https://backend-z7le.onrender.com/bookings')
            .then(res => res.json())
            .then(bookingdata => {
                console.log(sessiondata, bookingdata)
                if (sessiondata?.user?.email) {
                    const newList = bookingdata.filter((spot) => spot?.email === sessiondata?.user?.email);

                    setallList(newList);
                }
            })

    }


    const handleDelete = async (id) => {

        fetch(`https://backend-z7le.onrender.com/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.error("your item is deleted")
                    fetchdata()
                }
            })

    };

    useEffect(() => {
        fetchdata()



    }, [sessiondata]);
    return (
        <div className="container mx-auto">
            <ToastContainer />
            <div className="relative  h-72">
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
                    <Image
                        className="absolute h-72 w-full left-0 top-0 object-cover"
                        src={"/assets/images/about_us/parts.jpg"}
                        alt="service"
                        width={1920}
                        height={1080}
                        style={{ width: "90vw" }}
                    />
                    <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                            My Bookings
                        </h1>
                    </div>
                </div> */}

                <div className="relative w-full h-72">
                    {/* Background Image */}
                    <Image
                        className="w-full h-full object-cover rounded-lg"
                        src="/assets/images/about_us/parts.jpg"
                        alt="service"
                        width={1920}
                        height={1080}
                    />

                    {/* Overlay Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg z-10"></div>

                    {/* Text Layer */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <h1 className="text-white text-3xl font-bold">My Bookings</h1>
                    </div>
                </div>


            </div>
            <div className="mt-12 font-mono">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {alllist?.map(({ serviceTitle, _id, date, price }) => (
                                <tr key={_id}>
                                    <th>1</th>
                                    <td>{serviceTitle}</td>
                                    <td>{price}</td>
                                    <td>{date}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <Link href={`/my-bookings/update/${_id}`}><button class="btn btn-primary">Edit</button></Link>
                                            <button
                                                onClick={() => handleDelete(_id)}
                                                class="btn btn-error"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
