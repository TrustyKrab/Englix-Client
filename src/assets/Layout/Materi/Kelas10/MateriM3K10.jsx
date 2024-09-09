import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM3K10() {
    return (
        <div className='bg-blue-100 font-main py-12'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-xl'>Video ini menjelaskan tentang <span className='font-bold text-2xl'>"Past Tense"</span></h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md'>Bentuk kata kerja yang digunakan untuk menyatakan bahwa sebuah aksi atau kejadian telah terjadi di masa lalu. Dalam bahasa Inggris, past tense digunakan untuk menggambarkan tindakan atau situasi yang sudah selesai terjadi pada waktu yang telah berlalu.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md'>Materi yang akan dipelajari pada video kali ini adalah jenis-jenis yang ada di Past Tense. Seperti Simple Past Tense, Past Continuous Tense, Past Perfect Tense, Past Perfect Continuous Tense dan kapan menggunakan Past Tense.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/83inl1XnW-I?si=tBsz0NSz_o2rFC3K"
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
