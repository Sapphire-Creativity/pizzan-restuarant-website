import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import heroBgOne from '../../assets/hero_bg_1_1.jpg'
import heroBgTwo from '../../assets/hero_bg_1_2.jpg'
import { MdRestaurantMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
const slides = [
    {
        id: 1,
        title: "Fresh & Tasty Meals",
        subtitle: "Savor the Best in Every Bite",
        image: heroBgOne,
    },
    {
        id: 2,
        title: "Satisfy Your Cravings",
        subtitle: "We serve the taste you love",
        image: heroBgTwo,
    },
    {
        id: 3,
        title: "Delicious & Healthy",
        subtitle: "Experience True Flavor",
        image: heroBgOne,
    },
];

const HeroSlider = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"

            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-[110vh] relative overflow-hidden"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div
                        className="w-full h-[110vh] flex items-center justify-start bg-cover bg-center overflow-x-hidden"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-left text-white bg-black bg-opacity-50 p-10 rounded-xl"
                        >

                            <motion.h1
                                initial={{ opacity: 0, y: -70 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="text-4xl sm:text-6xl font-black uppercase"
                            >
                                {slide.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="text-lg mt-3"
                            >
                                {slide.subtitle}
                            </motion.p>

                            <motion.div initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }} className="flex items-center my-6 gap-6">
                                <motion.button initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 1 }}

                                    className="btn btn-primary">
                                    Browse Menu <MdRestaurantMenu />
                                </motion.button>
                                <motion.button initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="btn btn-primary">
                                    Order Now <FaOpencart />
                                </motion.button>


                            </motion.div>
                        </motion.div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSlider;
