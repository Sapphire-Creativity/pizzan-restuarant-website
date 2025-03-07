import React from 'react'
import OtherHeader from '../Components/OtherHeader'
import heroImage from "../assets/offer_banner_1.jpg";
import { FaUser, FaEnvelope, FaLock, FaPaperPlane } from 'react-icons/fa';
const SignIn = () => {
    return (
        <>
            <OtherHeader title="Sign In" subTitle="We are glad to have you back!" backgroundImage={heroImage} />

            <div className="container">
                <div className="w-full  sm:max-w-[30rem] mx-auto grid  grid-cols-1 items-center justify-center min-h-screen">

                    <form className="space-y-4 shadow-2xl rounded-2xl bg-white py-10 px-5 mx-auto w-full">
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Sign In</h2>


                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mb-20">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="py-4 flex items-center justify-center gap-4 bg-primary hover:bg-secondary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                            >
                                Sign In  <FaPaperPlane className="text-white" />
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center">
                            <p className="text-sm mt-8">
                                Don't have an account?
                                <span
                                    className="text-primary font-medium cursor-pointer"
                                    onClick={() => navigate("/signup")}
                                >
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn
