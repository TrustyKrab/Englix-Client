import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM3K10() {
    return (
        <div className='bg-blue-100 font-main py-12'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Announcement</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Announcement adalah sebuah pengumuman atau pemberitahuan resmi. Ini adalah informasi penting atau berita yang disampaikan kepada publik atau kelompok tertentu, sering kali untuk memberitahukan mereka tentang sesuatu yang baru atau signifikan.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah struktur dari announcement seperti opening statement, main information, Call to Action dan closing dan juga akan mempelajari dari contoh announcement.</p>
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
