import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'

export default function MateriM4K11() {
    return (
        <div className='bg-blue-100 py-12 font-main'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Explanation Text</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Explanation Text adalah jenis teks yang bertujuan untuk menjelaskan bagaimana atau mengapa sesuatu terjadi. Teks ini sering digunakan untuk menjelaskan proses alami, fenomena ilmiah, atau bagaimana sesuatu bekerja. Teks penjelasan biasanya ditulis dalam urutan logis atau kronologis dan sering mencakup langkah-langkah atau tahapan yang terlibat dalam proses yang sedang dijelaskan.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah struktur dari explanation text dan contoh dari explanation text.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/SfvH2-1JydQ?si=VeSPLtArKKE__voN"
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
