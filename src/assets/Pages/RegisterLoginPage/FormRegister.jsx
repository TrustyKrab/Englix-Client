import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function FormRegister() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notlp, setNotlp] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://englix-server.vercel.app/user/register", { username, email, password, notlp })
            .then(response => {
                console.log(response);
                alert("Akun berhasil Ditambahkan")
                navigate("/FormLogin")
            }).catch(err => {
                if (err.response) {
                    const errorMessage = err.response.data.message;
                    if (err.response.status === 400) {
                        if (errorMessage === "Email already exists") {
                            alert("Email sudah digunakan");
                        } else if (errorMessage === "Username already exists") {
                            alert("Username sudah digunakan");
                        } else {
                            alert(errorMessage);
                        }
                    } else {
                        alert("Terjadi kesalahan saat mendaftar");
                    }
                } else {
                    alert("Terjadi kesalahan saat mendaftar");
                }
                navigate('/FormRegister');
            });
    }
    return (
        <div className="flex flex-wrap justify-center px-5 sm:px-10 md:px-20 bg-indigo-300 min-h-screen font-main">
            <div className="w-full sm:w-4/5 md:w-2/5 border-2 rounded-3xl px-5 bg-white my-10">
                <div className="flex justify-center w-full my-10">
                    <img src="logo-black.png" className="w-32 sm:w-40 md:w-52" alt="Logo"></img>
                </div>
                <div className="mb-10 sm:mb-14">
                    <h1 className="text-center text-lg sm:text-xl md:text-2xl">SELAMAT DATANG</h1>
                </div>
                <form onSubmit={handleSubmit} className="mb-8 sm:mb-12">
                    <label
                        htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />

                    <label
                        htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />

                    <label
                        htmlFor="notlp" className="block text-gray-700 text-sm font-bold mb-2">No. Telpon</label>
                    <input
                        type="tel"
                        name="notlp"
                        id="notlp"
                        onChange={(e) => setNotlp(e.target.value)}
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />

                    <label
                        htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 mb-8 sm:mb-12 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />

                    <div className="text-center mb-5">
                        <button type="submit" className="py-2 px-4 rounded-lg text-white bg-pink-500 hover:bg-blue-500 hover:scale-105 transition duration-200 drop-shadow-2xl">DAFTAR</button>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/LandingPage">
                            <h1 className="hover:underline">Kembali</h1>
                        </Link>
                    </div>
                </form>
                <div className="text-center mb-2">
                    <h1 className="text-sm">Sudah punya akun?
                        <Link to="/FormLogin">
                            <span className="font-medium text-indigo-600 hover:text-pink-600"> MASUK</span>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>

    )
}