import React from 'react';
import Lottie from 'react-lottie';
import background from '../assets/offer_banner_1.jpg';
import lottieData from '../assets/lottie-icon.json'; //  

const CenterBackground = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section
            className="w-full h-[80vh] relative bg-center bg-cover bg-no-repeat flex items-center text-left text-white overflow-hidden bg-fixed"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Content */}
            <div className="relative max-w-2xl pl-16 space-y-2">
                <h2 className="text-xl font-semibold text-yellow-400 uppercase tracking-wider flex items-center">
                    Today's Special Offer
                    {/* Lottie Animation Icon */}
                    <Lottie options={defaultOptions} height={70} width={70} className="ml-4" />
                    <lottieData />
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold">
                    Delicious <br /> <span className="text-primary text-7xl">Burger</span>
                </h1>
                <p className="text-lg text-gray-200 max-w-md">
                    Savor the rich flavors of our special burger, crafted with fresh ingredients and unmatched taste.
                </p>
                <button className="mt-5 px-6 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 transition duration-300 rounded-full">
                    Order Now
                </button>
            </div>

            {/* Discount Badge */}
            <div className="absolute top-10 right-10 bg-yellow-400 text-black font-bold text-lg px-6 py-2 rounded-full shadow-lg animate-bounce">
                20% OFF
            </div>
        </section>
    );
};

export default CenterBackground;
