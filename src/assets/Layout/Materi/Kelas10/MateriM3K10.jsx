import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM3K10() {
    return (
        <div className='bg-blue-100 font-main py-12'>
            <NavbarHome />
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
            <div className='py-5 px-7 mx-80 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-xl'>Video ini menjelaskan tentang <span className='font-bold text-2xl'>"Basic English in Introduction"</span></h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md'>Pada video materi ini diharapkan siswa dapat memahami dan memiliki keterampilan dalam konsep dalam Bahasa Inggris. Dan dapat memberikan pondasi untuk memahami, berbicara, membaca dan menulis dalam Bahasa Inggris.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md'>Pada video materi <span className='text-lg'>"Basic English in Introduction"</span> ini membahas mengenai Pengertian dan elemen-elemen dasar pada Bahasa Inggris. Seperti Greetings, Introduction Yourself, Asking for Personal Information, Basic Responses dan Common Phrases. Dan juga membahas tentang struktur pada Basic Sentences.</p>
                </div>
            </div>
        </div>
    )
}
