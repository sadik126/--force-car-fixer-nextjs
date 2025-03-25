import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import imag from '../../../public/assets/images/team/1.jpg'

const teamMembers = [
    { id: 1, name: "Car Engine Plug", role: "Engine Expert", img: "../../../public/assets/images/team/1.jpg" },
    { id: 2, name: "Car Engine Plug", role: "Engine Expert", img: "/team2.jpg" },
    { id: 3, name: "Car Engine Plug", role: "Engine Expert", img: "/team3.jpg" },
    { id: 4, name: "Car Engine Plug", role: "Engine Expert", img: "/assets/images/1.jpg" },
    { id: 5, name: "Car Engine Plug", role: "Engine Expert", img: "/team2.jpg" },
    { id: 6, name: "Car Engine Plug", role: "Engine Expert", img: "/team3.jpg" },
];

export default function TeamSlider() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 text-center">
            <p className="text-orange-500 font-bold uppercase">Team</p>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
                The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words.
            </p>

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mt-8"
            >
                {teamMembers.map((member) => (
                    <SwiperSlide key={member.id}>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition-all">
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
        </div>
    );
}
