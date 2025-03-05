import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "./Header";
import { chefsData } from "../assets/data";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imageOne from '../assets/image-1.png';
const ChefSection = () => {
    return (
        <section className="px-10 py-14 relative overflow-x-hidden">
            <Header subTitle="Expert Chefs" title="Meet our expert chefs" />


            {/*  */}

            {/* Swiper Container */}
            <div className="relative mt-10">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }} // Slowed down
                    speed={1200}
                    navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {chefsData.map((data) => (
                        <SwiperSlide key={data.id}>
                            <div className="group relative rounded-lg overflow-hidden">
                                <img
                                    src={data.image}
                                    alt={data.name}
                                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Info details (Hidden by default, slides up on hover) */}
                                <div className="absolute bottom-[-120%] left-4 right-4 transition-all duration-700 group-hover:bottom-4 shadow-lg">
                                    <span className="bg-primary text-white py-2 px-6 rounded-tr-lg rounded-tl-lg">
                                        {data.position}
                                    </span>

                                    <div className="flex flex-col items-center mt-2 bg-white p-4 rounded-xl">
                                        <h4 className="text-secondary text-lg font-bold">{data.name}</h4>

                                        {/* Social Icons with Rounded Border & Hover Effect */}
                                        <div className="flex gap-3 mt-3">

                                            <TiSocialFacebook className='border border-secondary hover:border-primary text-[3rem] bg-white text-black hover:bg-primary hover:text-white duration-500 p-4 rounded-full' />
                                            <FaInstagram className='border border-secondary hover:border-primary text-[3rem] text-black bg-white hover:bg-primary hover:text-white duration-500 p-4 rounded-full' />
                                            <FaXTwitter className='border border-secondary hover:border-primary text-[3rem] bg-white text-black hover:bg-primary hover:text-white duration-500 p-4 rounded-full' />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 swiper-prev cursor-pointer border-2 border-gray-600 p-3 rounded-full transition-all duration-300 hover:bg-gray-600 hover:text-white hover:scale-110">
                    <FaChevronLeft />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 swiper-next cursor-pointer border-2 border-gray-600 p-3 rounded-full transition-all duration-300 hover:bg-gray-600 hover:text-white hover:scale-110">
                    <FaChevronRight />
                </div>
            </div>
        </section>
    );
};

export default ChefSection;
