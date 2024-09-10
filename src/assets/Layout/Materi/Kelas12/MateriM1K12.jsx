import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM1K12() {
    return (

        <div className='bg-blue-100 py-12 font-main'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Common Expression 3</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Common Expression 3 merujuk pada kumpulan ekspresi umum dalam bahasa Inggris yang sering digunakan dalam percakapan sehari-hari. Ekspresi ini berguna untuk meningkatkan kemampuan komunikasi siswa dengan menggunakan frasa yang sering digunakan oleh penutur asli bahasa Inggris.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah contoh-contoh yang ada pada common expression 3 ini seperti Expression for Opinions, Expressions for Agreement and Disagreement, Expressions for Giving Advice, Expressions for Making Requests, Expressions for Expressing Surprise, Expressions for Apologize, Expressions for Providing Clarification, Expressions for Giving Examples dan Expressions for Agreeing to Terms</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/cye0TQPksv0?si=AE3KvoTTL9q15HV7"
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


