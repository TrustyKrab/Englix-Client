import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM2K10() {
    return (
        <div className='bg-blue-100 font-main py-12'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-bold text-3xl text-center'>Common Expressions</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Common Expressions adalah frasa atau ungkapan yang sering digunakan dalam komunikasi sehari-hari oleh penutur asli suatu bahasa.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video adalah contoh dari penggunaan Common Expressions. Common Expressions digunakan pada saat Greetings, saat Asking How Someone Is, saat Responding to How Are You, saat Introducing Yourself, saat Saying Goodbye, saat Apologizing, saat Thanking, saaat Asking for Help, saat Giving Directions dan di saat Making Request. </p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div className=''>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/W0WSj_Azyxg?si=f103kaWSJM0WkYIY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="rounded-2xl flex shadow-2xl drop-shadow-2xl">
                    </iframe>
                </div>
            </div>
        </div>
    )
}
