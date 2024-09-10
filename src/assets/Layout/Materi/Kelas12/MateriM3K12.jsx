import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'


export default function MateriM3K12() {
    return (
        <div className='bg-blue-100 py-12 font-main'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Indirect Speech</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Indirect Speech adalah cara untuk melaporkan atau menyampaikan apa yang dikatakan oleh orang lain tanpa menggunakan kutipan langsung. Dalam indirect speech, kita mengubah kata-kata asli dari pembicara menjadi kalimat yang lebih umum. Ini sering digunakan dalam penulisan dan percakapan untuk mengkomunikasikan informasi yang disampaikan oleh orang lain.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah struktur dan aturan pada Indirect Speech. Video kali ini juga akan membahas jenis-jenis dari Indirect Speech.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/Xkuz49O9Kh0?si=nUlLISfi_1__Vln1"
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
