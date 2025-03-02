import React from 'react';
import imageOne from '../assets/image-1.png';
import imageTwo from '../assets/image-2.png';
import imageThree from '../assets/image3-.png';
import imageFour from '../assets/image-4.png';
import imageFive from '../assets/image-5.png';
import imageSix from '../assets/image-6.png';

const Layout = ({ children }) => {
    return (
        <div className="relative">
            {/* Fixed images pinned to the edges of the website */}
            <img src={imageOne} alt="" className="fixed top-[30rem] left-0 w-24 h-auto z-50" />
            <img src={imageTwo} alt="" className="fixed top-0 right-0 w-32 h-auto z-50" />
            <img src={imageThree} alt="" className="fixed bottom-0 left-0 w-24 h-auto z-50" />
            <img src={imageFour} alt="" className="fixed bottom-0 right-0 w-24 h-auto z-50" />
            <img src={imageFive} alt="" className="fixed top-1/2 left-0 transform -translate-y-1/2 w-24 h-auto z-50" />
            <img src={imageSix} alt="" className="fixed top-1/2 right-0 transform -translate-y-1/2 w-24 h-auto z-50" />

            {/* Main content */}
            {children}
        </div>
    );
};

export default Layout;
