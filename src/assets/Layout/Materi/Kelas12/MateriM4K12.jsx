import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM4K12() {
    return (
        <div className='bg-blue-100 py-12 font-main'>
            <div className='mx-auto flex justify-center items-center py-14'>
                <NavbarHome />
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/PwIM-l9vOJ4?si=vHEa0zTYskRbQ_gM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="rounded-lg flex shadow-2xl drop-shadow-2xl">
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
