import React, { useState } from 'react'
import Label from "./Label";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


export default function FormLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/user/login', { email, password, })
            .then(response => {
                const username = jwtDecode(response.data.token)
                localStorage.setItem("username", username.username)
                alert("Berhasil Login");
                navigate('/HomePage');
            }).catch(err => {
                if (err.response && err.response.data.message) {
                    alert(err.response.data.message);
                } else {
                    alert("Terjadi kesalahan saat login");
                }
                console.log(err)
            });
    }

    return (
        <div className="flex flex-wrap justify-center px-20 bg-indigo-300 h-full">
            <div className="w-2/5 border-2 rounded-3xl px-5 bg-white my-10">
                <div className="flex justify-center w-full my-10">
                    <img src="logo-black.png" className="justify-center w-52"></img>
                </div>
                <div className="mb-20">
                    <h1 className="text-center">SELAMAT DATANG KEMBALI</h1>
                </div>
                <form onSubmit={handleSubmit} className="mb-12">

                    <label
                        htmlFor="email" className="block  text-gray-700 text-sm font-bold mb-2"> Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder=""
                        className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />

                    <label
                        htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 mb-12 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                        required
                    />

                    <div className="text-center">
                        <button type="submit" className="py-2 px-4 rounded-lg text-white hover:bg-blue-500 hover:scale-105 transition duration-200 drop-shadow-2xl bg-pink-500">Masuk</button>
                    </div>
                </form>

                <div>

                    <div className="text-center mb-2">
                        <h1 className="text-sm">Belum punya akun?
                            <Link to="/FormRegister">
                                <span className="font-medium text-indigo-600 hover:text-pink-600 ">DAFTAR
                                </span>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
