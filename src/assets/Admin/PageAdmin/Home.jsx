import { IoBook } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {


    return(
        <>
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl " >Selamat Datang</h1>
            <p className="text-center w-1/3  mt-5">Halaman ini digunakan sebagai pemantau aktifitas pengguna pada antarmuka pengguna, silahkan menikmati</p>
        </div>
        </>
    )
}

export default Home