import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'
import { Link } from 'react-router-dom'

export default function StartMenLatGram() {
    return (
        <div>
            <div className='bg-blue-100 h-[100vh] pt-20 font-main'>
                <div>
                    <NavbarHome />
                </div>
                <div className='bg-white my-32 mx-96 pt-10 pb-5 rounded-2xl'>
                    <div className='text-center'>
                        <h1 className='font-bold text-3xl mb-5'>Kerjakan soalnya dengan teliti!</h1>
                        <p className='font-semibold text-2xl'>Level Menengah</p>
                    </div>
                    <Link to="/LatihanGramMenengah">
                        <div className='justify-center flex mt-16'>
                            <button className='py-2 px-4 rounded-xl bg-pink-500 text-lg hover:bg-pink-600 font-semibold'>Start</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
