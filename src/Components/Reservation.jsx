import React from "react";
import Header from "./Header";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const Reservation = () => {
    return (
        <section className="py-20">
            <Header
                subTitle="Book A Table" title="Hassle-Free Table Reservations" />

            <div className="container flex-col w-full items-center pt-10 lg:flex">
                <form className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full max-w-3xl">
                    {/* Phone Number Input */}
                    <div className="flex items-center w-full border border-gray-300 p-3">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            required
                            className="w-full bg-transparent outline-none focus:ring-0  text-gray-300"
                        />
                        <FaPhone className="text-primary ml-2" />
                    </div>

                    {/* Date and Time Input */}
                    <div className="flex items-center w-full border border-gray-300 p-3 ">
                        <input
                            type="datetime-local"
                            required
                            className="w-full bg-transparent outline-none focus:ring-0 appearance-none text-gray-300"
                        />
                        <FaCalendarAlt className="text-primary ml-2" />
                    </div>

                    {/* Total Person Input */}
                    <div className="flex items-center w-full border border-gray-300 p-3">
                        <input
                            type="number"
                            placeholder="Total Guests"
                            required
                            className="w-full bg-transparent outline-none focus:ring-0  text-gray-300"
                        />
                        <MdPeopleAlt className="text-primary ml-2" />
                    </div>
                </form>

                <div className="flex items-center justify-center">
                    <a
                        href="/reservation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-5 w-full ">
                        BOOK RESERVATION <RiSendPlaneFill />
                    </a>
                </div>
            </div>
        </section >
    );
};

export default Reservation;