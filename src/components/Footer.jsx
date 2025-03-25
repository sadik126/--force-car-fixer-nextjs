import Image from 'next/image';
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaYoutube, FaPaw, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <footer className="bg-black text-white py-10 font-mono">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Logo Section */}
                    <div>
                        <div className="bg-white w-32 h-32 rounded-full mx-auto flex items-center justify-center shadow-lg">
                            <Image src={'/assets/tool.gif'} width={50} height={50} alt='logo' />
                        </div>
                        <p className="mt-4 text-gray-400">Homeless animal shelter. The budgetary unit of the Capital City of Warsaw.</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <FaFacebookSquare className="text-white text-2xl cursor-pointer" />
                            <FaInstagram className="text-white text-2xl cursor-pointer" />
                            <FaYoutube className="text-white text-2xl cursor-pointer" />
                        </div>
                    </div>

                    {/* Animals Section */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Animals</h5>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> When your pet is missing</a></li>
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> Recently found</a></li>
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> How to adopt?</a></li>
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> Pets for adoption</a></li>
                        </ul>
                    </div>

                    {/* Shelter Info Section */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Shelter Info</h5>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> General information</a></li>
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> About the shelter</a></li>
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> Statistics</a></li>
                            <li><a href="#" className="hover:text-orange-500 flex items-center"><FaPaw className="mr-2" /> Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Contact</h5>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Warsaw, 57 Street, Poland</li>
                            <li className="flex items-center"><FaPhone className="mr-2" /> +01 234 567 89</li>
                            <li className="flex items-center"><FaEnvelope className="mr-2" /> contact@example.com</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
                    © {year} Copyright: Rayhan Sadik
                </div>
            </div>
        </footer>
    )
}
