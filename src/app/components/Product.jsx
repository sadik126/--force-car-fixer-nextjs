import React from 'react'
import { Star, StarHalf, StarIcon } from 'lucide-react';

export default function Product({ product }) {
    const { img, name, price, ratings } = product;

    const stars = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {ratings > index ? (
                    <Star className="text-yellow-900" />
                ) : ratings > number ? (
                    <StarHalf className="text-yellow-400" />
                ) : (
                    <StarIcon className="text-yellow-400" />

                )}
            </span>
        );
    });
    return (
        <div >
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <img src={img} alt={name} className="w-3/4 h-48 object-cover rounded-lg" />

                <div className="mt-3 text-center">
                    <div className="flex justify-center">{stars}</div>
                    <h5 className="text-lg font-semibold text-gray-800 mt-2">{name}</h5>
                    <p className="text-orange-500 font-bold mt-1">Price: ${price}</p>
                    <button className="mt-3 bg-orange-500 text-white py-2 px-5 rounded-lg hover:bg-orange-600 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
