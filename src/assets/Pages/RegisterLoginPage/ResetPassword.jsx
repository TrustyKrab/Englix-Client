import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { token } = useParams();
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (password.length < 6) {
            newErrors.password = "Password minimal 6 karakter";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            const response = await axios.post(
                "https://englix-server.vercel.app/user/reset-password",
                {
                    password,
                    token,
                }
            );
            console.log(response);
            alert("Password berhasil diubah!");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error(error);
            alert("Gagal mengubah password");
        }
    };

    return (
        <>
            <div className="flex flex-wrap justify-center bg-indigo-300 h-[100vh] font-main">
                <div className="w-2/5 border-2 rounded-2xl px-6 bg-white my-40 py-5">
                    <div className=" mb-5">
                        <h1 className="text-center text-lg font-semibold">Masukan Password Baru.</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="mb-3">

                        <label
                            htmlFor="password" className="block  text-gray-700 text-sm font-bold mb-2"> Password Baru</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 mb-3 border-slate-200 rounded w-full py-2 px-3 text-gray-700 focus:outline-slate-500 focus:shadow-outline"
                            required
                        />
                    </form>
                    <div className='justify-center flex mb-5'>
                        <button className='bg-pink-500 text-white text-base rounded-lg py-2 px-3'>KIRIM LINK</button>
                    </div>
                </div>
            </div>
        </>
    )
}
