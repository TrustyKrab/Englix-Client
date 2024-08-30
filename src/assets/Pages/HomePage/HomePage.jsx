import React, { useEffect, useState } from "react";
import NavbarHome from "../../Layout/Navbar/NavbarHome";
import QuoteSlider from "./QuoteSlider";
import PilihKelas from "./PilihKelas";
import { useNavigate } from "react-router-dom";
import { Validation } from "../PageController/Validation";

function Homepage() {

    const { username, userId } = Validation();

    return (
        <div className="bg-blue-100 w-full mx-auto my-auto pb-20 font-main">
            <div>
                <NavbarHome ></NavbarHome>
                <div className="mt-5">
                    <QuoteSlider></QuoteSlider>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-3xl mb-6">Selamat Datang</h1>
                    <p className="font-semibold text-2xl mb-10">Silahkan pilih sesuai kelas anda😉</p>
                </div>
                <PilihKelas></PilihKelas>
            </div>
        </div>
    )
}

export default Homepage