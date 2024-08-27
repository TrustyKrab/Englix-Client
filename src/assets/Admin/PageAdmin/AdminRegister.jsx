import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminRegister = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://englix-server-q8atff73o-fathihprs-projects.vercel.app//admin/registerAdmin', {
            username, password
        })
            .then(response => {
                console.log(response);
                alert('Berhasil Melakukan Register')
                navigate('/adminLogin');
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    alert(err.response.data.message); // Menampilkan pesan error dari server
                } else {
                    alert("Terjadi kesalahan saat mendaftar"); // Pesan default jika tidak ada pesan dari server
                }
                navigate('/adminRegister')
            })
    }

    return (
        <>
            <section>
                <div className="h-screen w-full flex justify-center items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 bg-blue-300 rounded w-1/4">
                        <h1 className="font-black text-center text-3xl mb-10">Register Admin</h1>
                        <label htmlFor="username" className="w-full block font-bold text-xl">Username</label>
                        <input
                            type="text"
                            name='username'
                            id='username'
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-white w-full px-3 py-2 text-black rounded bg-opacity-90 mb-1"
                        />

                        <label htmlFor="password" className="w-full block font-bold text-xl">Password</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-white w-full px-3 py-2 text-black rounded bg-opacity-90"
                        />
                        <button
                            type="submit"
                            className="bg-pink-500 hover:bg-pink-600 w-full rounded text-center font-semibold text-white py-1 mt-10 lg:py-2 lg:text-xl"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </section >
        </>
    )
}

export default AdminRegister