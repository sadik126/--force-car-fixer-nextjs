"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const teamMembers = [
    { id: 1, name: "Car Engine Plug", role: "Engine Expert", img: "/assets/images/team/1.jpg" },
    { id: 2, name: "Car Engine Plug", role: "Engine Expert", img: "/assets/images/team/2.jpg" },
    { id: 3, name: "Car Engine Plug", role: "Engine Expert", img: "/assets/images/team/3.jpg" },
    { id: 4, name: "Car Engine Plug", role: "Engine Expert", img: "/assets/images/team/1.jpg" },
    { id: 5, name: "Car Engine Plug", role: "Engine Expert", img: "/assets/images/team/2.jpg" },
    { id: 6, name: "Car Engine Plug", role: "Engine Expert", img: "/assets/images/team/3.jpg" },
];

export default function TeamSlider() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-8 text-center relative"> {/* Parent div relative */}
            <p className="text-orange-500 font-bold uppercase">Team</p>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
                The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words.
            </p>

            {/* Swiper Wrapper */}
            <div className="relative"> {/* This will keep arrows inside the component */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    pagination={{ clickable: true }}
                    className="relative"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="rounded-lg w-full h-52 object-cover mb-4"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-500 mb-3">{member.role}</p>
                                <div className="flex justify-center gap-3 text-white">
                                    <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="#" className="bg-pink-500 p-2 rounded-full hover:bg-pink-600">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="custom-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-amber-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition z-50">
                    <FaArrowLeft size={25} />
                </button>
                <button className="custom-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-amber-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition z-50">
                    <FaArrowRight size={25} />
                </button>

            </div>
        </div>
    );
}
