import React from 'react'
// import img1 from '../images/calendar.png'
// import img2 from '../images/phone-call.png'
// import img3 from '../images/placeholder.png'
import { Clock, PhoneCall, MapPin } from "lucide-react";

export default function Blackbanner() {
    return (
        <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* First Card - Open Hours */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex items-center space-x-6">
                    <div className="bg-gray-700 p-4 rounded-full">
                        <Clock className="w-12 h-12 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-400 uppercase text-sm">We are open Monday-Friday</p>
                        <h4 className="text-xl font-semibold text-white">7:00 AM - 9:00 PM</h4>
                    </div>
                </div>

                {/* Second Card - Contact */}
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 rounded-lg shadow-lg flex items-center space-x-6">
                    <div className="bg-blue-700 p-4 rounded-full">
                        <PhoneCall className="w-12 h-12 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-300 uppercase text-sm">Have a question?</p>
                        <h4 className="text-xl font-semibold text-white">+8801400156406</h4>
                    </div>
                </div>

                {/* Third Card - Address */}
                <div className="bg-gradient-to-r from-red-800 to-red-900 p-6 rounded-lg shadow-lg flex items-center space-x-6">
                    <div className="bg-red-700 p-4 rounded-full">
                        <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-300 uppercase text-sm">Need a repair? Our address</p>
                        <h4 className="text-xl font-semibold text-white">Liza Street, New York</h4>
                    </div>
                </div>
            </div>
        </div>


    )
}
