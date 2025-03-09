import { useState, useEffect } from "react";
import pepperImage from "../assets/image-2.png";
import foodPlateImage from "../assets/lazyload-image.png";

const LoadingAnimation = () => {
  const [showPlate, setShowPlate] = useState(false);
  const [showPepper, setShowPepper] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPlate(true), 300); // Delay plate roll-in
    setTimeout(() => setShowPepper(true), 800); // Delay pepper roll-in
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-secondary overflow-hidden relative">
      {/* Rolling Food Plate (Shows after animation) */}
      <div className="relative w-40 h-40 flex justify-center items-center">
        {showPlate && (
          <img
            src={foodPlateImage}
            alt="Food Plate"
            className="w-24 h-24 object-contain absolute animate-roll-in"
          />
        )}

        {/* Steam Animation */}
        {showPlate && (
          <div className="absolute top-2 flex space-x-2 animate-steam">
            <div className="w-2 h-6 bg-transparent border-l-2 border-gray-400 rounded-full"></div>
            <div className="w-2 h-8 bg-transparent border-l-2 border-gray-400 rounded-full delay-150"></div>
            <div className="w-2 h-7 bg-transparent border-l-2 border-gray-400 rounded-full delay-300"></div>
          </div>
        )}
      </div>

      {/* Rolling Pepper (Shows after animation) */}
      {showPepper && (
        <img
          src={pepperImage}
          alt="Pepper"
          className="w-16 h-16 object-contain absolute animate-roll-in-reverse"
        />
      )}

      {/* Bouncing Text */}
      <p className="mt-4 text-xl font-normal animate-bounce text-primary font-lobster">
        Preparing deliciousness...
      </p>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes steam {
          0% {
            transform: translateY(5px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-15px);
            opacity: 0;
          }
        }

        .animate-steam {
          animation: steam 1.5s infinite ease-in-out;
        }

        @keyframes roll-in {
          0% {
            transform: translateX(-120px) rotate(-30deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
        }

        @keyframes roll-in-reverse {
          0% {
            transform: translateX(120px) rotate(30deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
        }

        .animate-roll-in {
          animation: roll-in 1.5s ease-out forwards;
        }

        .animate-roll-in-reverse {
          animation: roll-in-reverse 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
