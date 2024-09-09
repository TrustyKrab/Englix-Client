import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://englix-server.vercel.app/user/resetpassword', { password, token })
            .then(response => {
                console.log(response);
                alert("password berhasil di ubah");
                navigate('/FormLogin');
            })
            .catch(err => {
                if (err.response && err.response.status === 404) {
                    alert("Email not found");
                } else if (err.response && err.response.data.message) {
                    alert(err.response.data.message); // Menampilkan pesan error dari server
                } else {
                    alert("Terjadi kesalahan saat mengirim email"); // Pesan default jika tidak ada pesan dari server
                }
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex flex-wrap justify-center px-5 sm:px-10 md:px-20 bg-indigo-300 min-h-screen font-main">
                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/5 border-2 rounded-2xl px-6 bg-white my-10 sm:my-20 md:my-30 py-5">
                    <div className="mb-5">
                        <h1 className="text-center text-lg sm:text-xl md:text-2xl font-semibold">Masukan Password Baru.</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="mb-5">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"> Password Baru
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                            required
                        />
                        <div className="flex justify-center mb-5">
                            <button type="submit" className="bg-pink-500 text-white text-base rounded-lg py-2 px-4 hover:bg-pink-600 hover:scale-105 transition duration-200">KIRIM LINK</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
