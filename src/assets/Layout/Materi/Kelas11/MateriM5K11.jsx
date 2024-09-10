import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM5K11() {
    return (
        <div className='bg-blue-100 py-12 font-main'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Exposition Text</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Exposition Text adalah jenis teks yang digunakan untuk mengemukakan argumen atau pendapat dan memberikan alasan serta bukti untuk mendukungnya. Teks ini bertujuan untuk meyakinkan pembaca atau pendengar mengenai suatu topik atau posisi tertentu. Exposition text sering ditemukan dalam esai argumentatif, artikel opini, dan pidato persuasif.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah struktur dari exposition text dan contoh dari exposition text.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/nTCyw2F7ME0?si=a2tarpbmzi1-miHh"
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
