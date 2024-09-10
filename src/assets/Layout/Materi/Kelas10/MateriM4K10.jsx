import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM4K10() {
    return (
        <div className='bg-blue-100 font-main py-12'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-bold text-3xl text-center'>Past Tense</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Past Tense adalah bentuk kata kerja yang digunakan untuk menyatakan bahwa sebuah aksi atau kejadian telah terjadi di masa lalu. Dalam bahasa Inggris, past tense digunakan untuk menggambarkan tindakan atau situasi yang sudah selesai terjadi pada waktu yang telah berlalu.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah jenis-jenis yang ada di Past Tense. Seperti Simple Past Tense, Past Continuous Tense, Past Perfect Tense, Past Perfect Continuous Tense dan kapan menggunakan Past Tense.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/yNsNbkqeow0?si=CAiFszxHP1Z9FyuN"
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
