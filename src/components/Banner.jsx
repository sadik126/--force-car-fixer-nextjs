import React from 'react'
import Image from 'next/image'
// import Banner1 from '/assets/images/banner/1.jpg';


export default function Banner() {
    return (
        <>
            <div className="carousel font-mono ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <Image
                        src={'/assets/images/banner/10.jpg'}

                        width={2000}
                        height={200}
                        className="w-full h-[30rem] md:h-[40rem] lg:h-[50rem]"

                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>

                    <div className="absolute w-full bottom-0 md:bottom-30 left-1/2 transform -translate-x-1/2 md:left-40 md:translate-x-0 text-white text-center md:text-left">
                        <h5 className="text-3xl uppercase md:text-7xl font-bold leading-tight bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 bg-[length:200%_auto] animate-[gradientAnimation_5s_ease-in-out_infinite_alternate] text-transparent bg-clip-text">
                            Affordable <br />
                            price for car <br />
                            servicing
                        </h5>
                        <p className="mt-4 text-white max-w-md mx-auto md:mx-0">
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div className="my-6">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded m-4">
                                Discover more
                            </button>
                            <button className="border border-gray-300 text-white hover:bg-gray-800 py-2 px-4 rounded">
                                Latest project
                            </button>
                        </div>
                    </div>



                    <div className="absolute left-5 right-5 top-1/2 md:top-[80%] flex -translate-y-1/2 transform justify-between md:right-5 md:left-auto md:w-auto md:mr-5">
                        <a href="#slide4" className="btn btn-circle md:scale-200 scale-75 md:mr-14">❮</a>
                        <a href="#slide2" className="btn btn-circle md:scale-200 scale-75">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <Image
                        src={'/assets/images/banner/8.jpg'}

                        width={2000}
                        height={200}
                        className="w-full h-[30rem] md:h-[40rem] lg:h-[50rem]"

                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>

                    <div className="absolute w-full bottom-0 md:bottom-30 left-1/2 transform -translate-x-1/2 md:left-40 md:translate-x-0 text-white text-center md:text-left">
                        <h5 className="text-3xl uppercase md:text-7xl font-bold leading-tight bg-gradient-to-r from-red-500 via-white to-yellow-500 bg-[length:200%_auto] animate-[gradientAnimation_5s_ease-in-out_infinite_alternate] text-transparent bg-clip-text
">
                            Affordable <br />
                            price for car <br />
                            servicing
                        </h5>
                        <p className="mt-4 text-white max-w-md mx-auto md:mx-0">
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div className="my-6">
                            <button className="bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 rounded m-4">
                                Discover more
                            </button>
                            <button className="border border-gray-300 text-white hover:bg-gray-800 py-2 px-4 rounded">
                                Latest project
                            </button>
                        </div>
                    </div>



                    <div className="absolute left-5 right-5 top-1/2 md:top-[80%] flex -translate-y-1/2 transform justify-between md:right-5 md:left-auto md:w-auto md:mr-5">
                        <a href="#slide1" className="btn btn-circle md:scale-200 scale-75 md:mr-14">❮</a>
                        <a href="#slide3" className="btn btn-circle md:scale-200 scale-75">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <Image
                        src={'/assets/images/banner/9.jpg'}

                        width={2000}
                        height={200}
                        className="w-full h-[30rem] md:h-[40rem] lg:h-[50rem]"

                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>

                    <div className="absolute w-full bottom-0 md:bottom-30 left-1/2 transform -translate-x-1/2 md:left-40 md:translate-x-0 text-white text-center md:text-left">
                        <h5 className="text-3xl uppercase md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-red-500 to-white bg-[length:200%_auto] animate-[gradientAnimation_5s_ease-in-out_infinite_alternate] text-transparent bg-clip-text

">
                            Affordable <br />
                            price for car <br />
                            servicing
                        </h5>
                        <p className="mt-4 text-white max-w-md mx-auto md:mx-0">
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div className="my-6">
                            <button className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded m-4">
                                Discover more
                            </button>
                            <button className="border border-gray-300 text-white hover:bg-gray-800 py-2 px-4 rounded">
                                Latest project
                            </button>
                        </div>
                    </div>



                    <div className="absolute left-5 right-5 top-1/2 md:top-[80%] flex -translate-y-1/2 transform justify-between md:right-5 md:left-auto md:w-auto md:mr-5">
                        <a href="#slide1" className="btn btn-circle md:scale-200 scale-75 md:mr-14">❮</a>
                        <a href="#slide3" className="btn btn-circle md:scale-200 scale-75">❯</a>
                    </div>
                </div>
                {/* <div id="slide2" className="carousel-item relative w-full ">
                    <Image
                        src={'/assets/images/banner/8.jpg'}

                        width={2000}
                        height={200}
                        className="w-full h-[30rem] md:h-[40rem] lg:h-[50rem]"

                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>

                    <div className="absolute  bottom-0 md:bottom-30 left-1/2 transform -translate-x-1/2 md:left-40 md:translate-x-0 text-white text-center md:text-left">
                        <h5 className="text-5xl md:text-7xl font-bold leading-tight uppercase md:text-7xl font-bold leading-tight bg-gradient-to-r from-red-500 via-white to-yellow-500 bg-[length:200%_auto] animate-[gradientAnimation_5s_ease-in-out_infinite_alternate] text-transparent bg-clip-text
">
                            Affordable <br />
                            price for car <br />
                            servicing
                        </h5>
                        <p className="mt-4 text-white max-w-md mx-auto md:mx-0">
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div className="my-6">
                            <button className="bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 rounded mr-4">
                                Discover more
                            </button>
                            <button className="border border-gray-300 text-white hover:bg-gray-800 py-2 px-4 rounded">
                                Latest project
                            </button>
                        </div>
                    </div>



                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <Image
                        src={'/assets/images/banner/9.jpg'}

                        width={2000}
                        height={200}
                        className="w-full h-[30rem] md:h-[40rem] lg:h-[50rem]"

                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>

                    <div className="absolute  bottom-0 md:bottom-30 left-1/2 transform -translate-x-1/2 md:left-40 md:translate-x-0 text-white text-center md:text-left">
                        <h5 className="text-5xl md:text-7xl font-bold leading-tight uppercase md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-red-500 to-white bg-[length:200%_auto] animate-[gradientAnimation_5s_ease-in-out_infinite_alternate] text-transparent bg-clip-text

">
                            Affordable <br />
                            price for car <br />
                            servicing
                        </h5>
                        <p className="mt-4 text-white max-w-md mx-auto md:mx-0">
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div className="my-6">
                            <button className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded mr-4">
                                Discover more
                            </button>
                            <button className="border border-gray-300 text-white hover:bg-gray-800 py-2 px-4 rounded">
                                Latest project
                            </button>
                        </div>
                    </div>



                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}

            </div>
        </>
    )
}
