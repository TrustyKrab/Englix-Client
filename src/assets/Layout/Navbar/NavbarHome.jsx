import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Validation } from "../../Pages/PageController/Validation";

export default function NavbarHome() {
    const { username, userId } = Validation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav
                data-aos="fade-down"
                className="fixed top-0 right-0 w-full z-50 bg-blue-500 border-b-4 border-white py-4 sm:py-0"
            >
                <div className="mx-10 py-2 font-main">
                    <div className="flex justify-between items-center w-full">
                        {/* Logo di sebelah kanan pada mobile, di kiri pada desktop */}
                        <Link to="/HomePage" className="w-full flex justify-end sm:justify-start">
                            <div>
                                <img src="logoNoBackground.png" className="w-36" alt="logo" />
                            </div>
                        </Link>

                        {/* Button menu for mobile devices */}
                        <button
                            className="sm:hidden text-white text-2xl p-4 fixed top-4 left-4 z-50"
                            onClick={handleSidebarToggle}
                        >
                            {isSidebarOpen ? "✕" : "☰"}
                        </button>

                        <div className="text-white hidden sm:block">
                            <ul className="flex items-center ml-32 gap-6 text-xl py-4 ">
                                <Link to="/HomePage">
                                    <li className="hover:text-pink-500">
                                        <a href="">Home</a>
                                    </li>
                                </Link>

                                <Link to="/MateriMain">
                                    <li className="hover:text-pink-500">
                                        <a href="">Materi</a>
                                    </li>
                                </Link>

                                <Link to="/LatihanPage">
                                    <li className="hover:text-pink-500">
                                        Latihan
                                    </li>
                                </Link>

                                <Link to={`/HomePage/Profile/${userId}`}>
                                    <li className="hover:text-pink-500">
                                        Akun
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar component */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-blue-300 text-white z-40 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="text-lg relative overflow-y-auto h-screen p-10">
                    <ul className="flex flex-col gap-6 text-xl py-4">
                        <Link to="/HomePage">
                            <li className="hover:text-pink-500">
                                <a href="">Home</a>
                            </li>
                        </Link>

                        <Link to="/MateriMain">
                            <li className="hover:text-pink-500">
                                <a href="">Materi</a>
                            </li>
                        </Link>

                        <Link to="/LatihanPage">
                            <li className="hover:text-pink-500">
                                Latihan
                            </li>
                        </Link>

                        <Link to={`/HomePage/Profile/${userId}`}>
                            <li className="hover:text-pink-500">
                                Akun
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}