"use client"
import React, { useEffect, useState } from 'react'
import Product from './Product'

import Loading from '../services/[id]/Loading';


export default function Products() {
    const [products, setProducts] = useState([])
    const [visibleCount, setVisibleCount] = useState(4)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://backend-z7le.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <Loading></Loading>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center">
                <small className="text-orange-500 font-bold uppercase">Popular Products</small>
                <h1 className="text-3xl font-bold text-gray-900 my-3">Browse Our Products</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda neque, blanditiis fuga reiciendis facere ad.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {products.slice(0, visibleCount).map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-8">
                <button
                    onClick={() => setVisibleCount(visibleCount === 4 ? products.length : 4)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all"
                >
                    {visibleCount === 4 ? "Show More" : "Show Less"}
                </button>
            </div>
        </div>
    )
}
