import React, { useState } from 'react';
import MateriM1K10 from '../../Layout/Materi/Kelas10/MateriM1K10';
import KuisM1K10 from '../../Layout/Kuis/Kelas10/KuisM1K10';
import MateriM2K10 from '../../Layout/Materi/Kelas10/MateriM2K10';
import KuisM2K10 from '../../Layout/Kuis/Kelas10/KuisM2K10';
import MateriM3K10 from '../../Layout/Materi/Kelas10/MateriM3K10';
import KuisM3K10 from '../../Layout/Kuis/Kelas10/KuisM3K10';
import MateriM4K10 from '../../Layout/Materi/Kelas10/MateriM4K10';
import KuisM4K10 from '../../Layout/Kuis/Kelas10/KuisM4K10';
import MainPageK10 from './MainPageK10';
import "./SidebarK10.css";

export default function SidebarK10() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState('introduction');

    const coba = [
        { judul: "introduction", component: MainPageK10 },
        {
            judul: "Basic English in Introduction",
            url: "https://www.youtube.com/embed/WADirgJdrmc?si=vJHpY2Ex3lietrKT",
            description1: 'Basic English in Introduction.',
            description2: 'Pada video materi ini membahas mengenai Pengertian dan elemen-elemen dasar pada Bahasa Inggris...',
            description3: 'Materi yang akan dipelajari di video adalah elemen-elemen dasar dalam introduction...'
        },
        { judul: "Quiz Basic English in Introduction", component: KuisM1K10 },
        // Tambahan materi lainnya...
    ];

    const handlePageChange = (judul) => {
        setSelectedPage(judul);
        setIsSidebarOpen(false);  // Tutup sidebar saat opsi dipilih
    };

    const renderContent = () => {
        const selectedData = coba.find(data => data.judul === selectedPage);
        if (selectedData?.url) {
            return (
                <div className="flex flex-col items-center md:px-12">
                    <div className='my-4 flex justify-center items-center w-full'>
                        <div className='w-full max-w-screen-lg flex justify-center'>
                            <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    src={selectedData.url}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full rounded-2xl"
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='bg-pink-500 py-4 px-4 md:px-8 rounded-2xl text-center'>
                        <div className='py-2 px-3 mb-5 bg-white text-black rounded-xl'>
                            <h1 className='font-bold text-lg md:text-2xl'>{selectedData.description1}</h1>
                        </div>
                        <div className='py-2 px-3 mb-5 bg-white text-black rounded-xl'>
                            <h1 className='font-semibold text-sm md:text-lg'>{selectedData.description2}</h1>
                        </div>
                        <div className='py-2 px-3 bg-white text-black rounded-xl'>
                            <h1 className='font-semibold text-sm md:text-lg'>{selectedData.description3}</h1>
                        </div>
                    </div>
                </div>
            );
        } else if (selectedData?.component) {
            const Component = selectedData.component;
            return <Component />;
        }
        return null;
    };

    return (
        <div className="flex flex-col md:flex-row">
            {/* Tombol Menu untuk Mobile */}
            <button
                className="md:hidden p-4 text-2xl fixed top-4 left-4 z-50 bg-pink-500 text-white rounded"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                &#9776;
            </button>

            {/* Sidebar untuk Desktop dan Mobile */}
            <div
                className={`fixed inset-0 top-16 md:static md:w-1/4 bg-blue-900 text-white md:bg-transparent md:h-auto overflow-y-auto transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            >
                <button
                    className="md:hidden p-4 text-2xl"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    &times;
                </button>
                <div className="text-lg relative overflow-x-hidden px-5">
                    {coba.map((data, index) => (
                        <a
                            key={index}
                            onClick={() => handlePageChange(data.judul)}
                            className={`block bg-blue-300 py-2 px-5 mb-2 border-b-2 rounded-lg hover:scale-105 transition duration-500 hover:bg-pink-300 hover:drop-shadow-xl ${selectedPage === data.judul ? 'bg-pink-500' : 'text-white'}`}
                        >
                            {data.judul}
                        </a>
                    ))}
                </div>
            </div>

            {/* Konten */}
            <div className={`flex-1 pb-10 relative overflow-y-auto pt-3 transition-all duration-300 ${isSidebarOpen ? 'hidden' : 'block'}`}>
                <div className={`page ${selectedPage}`}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
