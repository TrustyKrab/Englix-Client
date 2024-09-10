import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM1K10() {
    return (
        <div className='bg-blue-100 font-main py-12'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-bold text-3xl text-center'>Basic English in Introduction</h1>
                </div>

                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Basic English in Introduction mengacu pada keterampilan dan konsep dasar dalam bahasa Inggris yang penting untuk dipelajari oleh pemula. Dasar-dasar ini memberikan fondasi untuk memahami, berbicara, membaca, dan menulis dalam bahasa Inggris.</p>
                </div>

                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari di video adalah elemen-elemen dasar dalam introduction. seperti saat Greetings, Introducing Yourself, Asking for Personal Information, Basic Responses, Common Phrases dan membahas struktur dari Basic Sentences.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div className='rounded-2xl'>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/WADirgJdrmc?si=vJHpY2Ex3lietrKT"
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
