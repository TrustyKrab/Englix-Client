import React from "react";
import { Link } from "react-router-dom";
import { Validation } from "../../Pages/PageController/Validation";

export default function NavbarHome() {

    const { username, userId } = Validation();

    return (
        <>
            <nav
                data-aos="fade-down"
                className="fixed top-0 right-0 w-full z-50 bg-blue-500 border-b-4 border-white py-4 sm:py-0"
            >
                <div className="mx-10 py-2 font-main">
                    <div className="flex justify-between items-center w-full">
                        <Link to="/HomePage">
                            {/* Logo tetap berukuran sama tetapi tidak terlihat di layar mobile */}
                            <div className="invisible sm:visible">
                                <img src="logoNoBackground.png" className="w-36" alt="logo"></img>
                            </div>
                        </Link>
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
        </>
    )
}
