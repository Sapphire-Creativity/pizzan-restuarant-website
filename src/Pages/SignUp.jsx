import React, { useState } from 'react'
import OtherHeader from '../Components/OtherHeader'
import heroImage from "../assets/offer_banner_1.jpg";
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaUser, FaEnvelope, FaLock, FaPaperPlane } from "react-icons/fa";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(firstName)

    const handleSignUp = async (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email, password)

        if (!firstName || !lastName || !email || !password) {
            toast.error("Please fill all fields!")
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user

            // store user details in firestore
            await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                firstName,
                lastName,
            })


            toast.success("Registered Successfully!", { position: "top-center" });

            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)

        } catch (error) {

            console.log(error.message)
            toast.error(error.message, { position: "bottom-center" });

        }


    }

    return (
        <>
            {/* <OtherHeader title="Sign Up" subTitle="Welcome! Kindly create an account" backgroundImage={heroImage} /> */}
            <div className="container">
                <ToastContainer />
                <div className="w-full  sm:max-w-[30rem] mx-auto grid  grid-cols-1 items-center justify-center min-h-screen">

                    <form onSubmit={handleSignUp} className="space-y-4 shadow-2xl rounded-2xl bg-white py-10 px-5 mx-auto w-full">
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Sign Up</h2>

                        <div className="flex flex-col gap-5">
                            {/* First Name */}
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}

                                    type="text"
                                    placeholder="First Name"
                                    className="w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email"
                                className="w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mb-20">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
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
                                Submit  <FaPaperPlane className="text-white" />
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center">
                            <p className="text-sm mt-8">
                                Already have an account?{" "}
                                <span
                                    className="text-primary font-medium cursor-pointer"
                                    onClick={() => navigate("/signin")}
                                >
                                    Sign In
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
