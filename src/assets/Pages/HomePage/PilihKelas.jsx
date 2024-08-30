import React from "react";
import { Link } from "react-router-dom";


export default function PilihKelas() {
    return (
        <>
            <div className="mx-10 pt-7 rounded-xl bg-blue-300 drop-shadow-2xl shadow-2xl" style={{ backgroundImage: "url('/bgHome.png')" }}>
                <h1 className="mb-2 mx-5 font-semibold">Pilih Kelas :</h1>
                <div className="flex flex-wrap">

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <Link to="/Kelas10Page">
                            <div className="hover:bg-blue-600 rounded-xl py-4 px-4 border-slate-300 mb-10 text-md font-semibold bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                🐔 Kelas 10
                                <img src="" alt="" width="w-full" />
                            </div>
                        </Link>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <Link to="/Kelas11Page">
                            <div className="hover:bg-blue-600 rounded-xl py-4 px-4 border-slate-300 mb-10 text-md font-semibold bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                🐻 Kelas 11
                                <img src="" alt="" width="w-full" />
                            </div>
                        </Link>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <Link to="/Kelas12Page">
                            <div className="hover:bg-blue-600 rounded-xl py-4 px-4 border-slate-300 mb-10 text-md font-semibold bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                🦁 Kelas 12
                                <img src="" alt="" width="w-full" />
                            </div>
                        </Link>
                    </div>

                </div>
            </div >
        </>
    )
}