import React from 'react'
import NavbarHome from '../../Navbar/NavbarHome'


export default function MateriM2K12() {
    return (
        <div className='bg-blue-100 py-12 font-main'>
            <NavbarHome />
            <div className='py-5 px-5 mx-60 mt-20 justify-center rounded-3xl bg-pink-500 text-black'>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <h1 className='font-semibold text-3xl text-center'>Conditional Sentences</h1>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl mb-3'>
                    <p className='font-semibold text-md text-center'>Conditional Sentences digunakan untuk menyatakan situasi yang bergantung pada kondisi tertentu. Biasanya, conditional sentences terdiri dari dua klausa: klausa kondisi (if-clause) dan klausa utama (main clause). Ada beberapa tipe conditional sentences, masing-masing dengan struktur dan penggunaan yang berbeda.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded-2xl'>
                    <p className='font-semibold text-md text-center'>Materi yang akan dipelajari pada video kali ini adalah tipe-tipe dari Conditional Sentences seperti Zero Conditional, First Conditional, Second Conditional, Third Conditional dan Mixed Conditional.</p>
                </div>
            </div>
            <div className='mx-auto flex justify-center items-center py-14'>
                <div>
                    <iframe
                        width="885"
                        height="500"
                        src="https://www.youtube.com/embed/m9QVLBWEwhg?si=jKLn7m-68t2Rf_Vx"
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
