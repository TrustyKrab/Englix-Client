import axios from 'axios'
import { useState, useEffect } from 'react'

const UserActifity = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://englix-server.vercel.app/user/${id}/deleteUser`)
            alert('Berhasil Menghapus User')
            getUser()
        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        try {
            const response = await axios.get("https://englix-server.vercel.app/user/getUsers")
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="w-ful py-36 px-1 sm:px-3 md:px-5  lg:px-11 lg:py-10 ">
                <h1 className="text-purple-600 font-bold text-2xl text-center mb-4 md:text-6xl md:mb-8 lg:mb-14">USERS ACTIFITY</h1>
                <div className="w-full">
                    <table className="table-auto border-separate border border-slate-400 bg-white text-center w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">No.</th>
                                <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">Email</th>
                                <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">Username</th>
                                <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">User Quiz Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) => (
                                <tr key={user._id}>
                                    <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">{index + 1}</td>
                                    <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">{user.email}</td>
                                    <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">{user.username}</td>
                                    <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">
                                        {user.quiz.map((quiz) => (
                                            <ul key={quiz._id} className='px-7 list-disc'>
                                                <li className='text-left'><span className='font-bold'>{quiz.quizname}</span> : {quiz.score}</li>
                                            </ul>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserActifity