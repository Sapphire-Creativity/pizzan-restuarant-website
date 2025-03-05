import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroSlider from '../Components/HeroSlide/HeroSlide';
import Header from '../Components/Header';
import { SlideFoodMenu } from '../assets/data';
import { FaRegEye } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import AboutSection from '../Components/AboutSection';
import CenterBackground from '../Components/CenterBackground';
import ChefSection from '../Components/ChefSection';
import AppImage from '../Components/AppImage';
import Reservation from '../Components/Reservation';
import FoodCategory from '../Components/FoodCategory';

const Home = () => {
    return (
        <>
            <HeroSlider />

            {/* Slide Menu */}
            <section className='py-20 px-4 md:px-20 mx-auto'>
                <Header title="Our Popular Food Items" subTitle="Food Menu" />

                {/* Swiper Slider for Menu Cards */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    speed={2000}


                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    className="pt-5 pb-14"
                >
                    {SlideFoodMenu.map((data) => (
                        <SwiperSlide key={data.id}>
                            <div className='py-10 rounded-2xl bg-accent text-center flex flex-col items-center justify-center cursor-pointer'>

                                {/* Rotating Image */}
                                <img
                                    src={data.image}
                                    alt={data.name}
                                    className='max-w-56 animate-spin-slow'
                                />

                                {/* Icons */}
                                <div className='flex items-center justify-between gap-5 my-5'>
                                    <FaRegEye className='text-[3rem] bg-white text-black hover:bg-primary hover:text-white duration-500 p-4 rounded-full' />
                                    <IoMdCart className='text-[3rem] bg-secondary text-white hover:bg-primary duration-500 p-4 rounded-full' />
                                    <FaRegHeart className='text-[3rem] bg-white text-black hover:bg-primary hover:text-white duration-500 p-4 rounded-full' />
                                </div>

                                {/* Food Details */}
                                <div>
                                    <h3 className='text-lg font-bold text-gray-700'>{data.name}</h3>
                                    <p className='text-sm my-1 text-gray-600'>{data.category}</p>
                                    <h4 className='font-bold text-primary'>${data.price}</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section>
                <AboutSection />
            </section>


            <CenterBackground />
            <FoodCategory/>
            <Reservation />
            <ChefSection />
            <AppImage />



        </>
    );
};

export default Home;
