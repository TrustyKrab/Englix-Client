import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM6K11() {
    return (
        <div className='bg-blue-100 py-12 font-main'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Grammar Intermediate</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>mengacu pada tingkat keterampilan tata bahasa yang berada di antara pemula (beginner) dan lanjutan (advanced). Pada tingkat ini, pembelajar diharapkan memiliki pemahaman dasar yang baik tentang struktur bahasa dan mulai menguasai aturan tata bahasa yang lebih kompleks.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah contoh-contoh grammar intermediate yang digunakan pada Tense, Conditional Text, Passive Voice, Modals, Relatives Clauses, Gerunds and Infinitives dan terakhir pada Comparatives and Superlatives</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/-AA7svxZZv0?si=PUhFJE9XXZ4DGhCA"
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
