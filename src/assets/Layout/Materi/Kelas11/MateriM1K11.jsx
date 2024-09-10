import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM1K11() {
    return (
        <div className='bg-blue-100 py-12 font-main'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Common Expressions 2</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Common Expressions 2 dalam bahasa Inggris melanjutkan pembahasan mengenai ekspresi-ekspresi umum yang sering digunakan dalam percakapan sehari-hari. Jika Common Expressions 1 mencakup frasa dasar untuk menyapa, memperkenalkan diri, dan bertanya kabar, maka Common Expressions 2 akan mencakup ekspresi yang lebih beragam dan spesifik untuk situasi berbeda.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah contoh-contoh common expressions yang digunakan dalam kondisi tertentu dan sedikit contoh dari Idioms.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/Iyu89WDBPIY?si=QnTo7KBGZdhoSv-9"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className='rounded-2xl flex shadow-2xl drop-shadow-2xl'>
                    </iframe>
                </div>
            </div>
        </div>
    )
}
