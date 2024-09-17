import React, { useState } from 'react';
import KuisM1K10 from '../../Layout/Kuis/Kelas10/KuisM1K10';
import KuisM2K10 from '../../Layout/Kuis/Kelas10/KuisM2K10';
import KuisM3K10 from '../../Layout/Kuis/Kelas10/KuisM3K10';
import KuisM4K10 from '../../Layout/Kuis/Kelas10/KuisM4K10';
import MainPageK10 from './MainPageK10';
import "./SidebarK10.css";

export default function SidebarK10() {
    const coba = [
        { judul: "introduction", component: MainPageK10 },

        {
            judul: "Basic English in Introduction",
            url: "https://www.youtube.com/embed/WADirgJdrmc?si=vJHpY2Ex3lietrKT",
            description1: 'Basic English in Introduction.',
            description2: 'Pada video materi ini membahas mengenai Pengertian dan elemen-elemen dasar pada Bahasa Inggris. Seperti Greetings, Introduction Yourself, Asking for Personal Information, Basic Responses dan Common Phrases. Dan juga membahas tentang struktur pada Basic Sentences.',
            description3: 'Materi yang akan dipelajari di video adalah elemen-elemen dasar dalam introduction. seperti saat Greetings, Introducing Yourself, Asking for Personal Information, Basic Responses, Common Phrases dan membahas struktur dari Basic Sentences.',
        },

        { judul: "Quiz Basic English in Introduction", component: KuisM1K10 },

        {
            judul: "Common Expressions",
            url: "https://www.youtube.com/embed/W0WSj_Azyxg?si=erye6uN5eF5c0v3n",
            description1: 'Common Expressions',
            description2: 'Frasa atau ungkapan yang sering digunakan dalam komunikasi sehari-hari oleh penutur asli suatu bahasa.',
            description3: 'Materi yang akan dipelajari pada video adalah contoh dari penggunaan Common Expressions. Common Expressions digunakan pada saat Greetings, saat Asking How Someone Is, saat Responding to How Are You, saat Introducing Yourself, saat Saying Goodbye, saat Apologizing, saat Thanking, saaat Asking for Help, saat Giving Directions dan di saat Making Request.'
        },

        { judul: "Quiz Common Expressions", component: KuisM2K10 },

        {
            judul: "Past tense",
            url: "https://www.youtube.com/embed/yNsNbkqeow0?si=WTmD4VqfYZvWZQZ7",
            description1: 'Past Tense',
            description2: 'Bentuk kata kerja yang digunakan untuk menyatakan bahwa sebuah aksi atau kejadian telah terjadi di masa lalu. Dalam bahasa Inggris, past tense digunakan untuk menggambarkan tindakan atau situasi yang sudah selesai terjadi pada waktu yang telah berlalu.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah jenis-jenis yang ada di Past Tense. Seperti Simple Past Tense, Past Continuous Tense, Past Perfect Tense, Past Perfect Continuous Tense dan kapan menggunakan Past Tense.'
        },

        { judul: "Quiz Past tense", component: KuisM3K10 },

        {
            judul: "Announcement",
            url: "https://www.youtube.com/embed/83inl1XnW-I?si=Cgk5geyZ9ohZUOH7",
            description1: 'Announcement',
            description2: 'sebuah pengumuman atau pemberitahuan resmi. Ini adalah informasi penting atau berita yang disampaikan kepada publik atau kelompok tertentu, sering kali untuk memberitahukan mereka tentang sesuatu yang baru atau signifikan.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah struktur dari announcement seperti opening statement, main information, Call to Action dan closing dan juga akan mempelajari dari contoh announcement.'
        },

        { judul: "Quiz Announcement", component: KuisM4K10 },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState('introduction');

    const handlePageChange = (judul) => {
        setSelectedPage(judul);
        setIsSidebarOpen(false);  // Tutup sidebar saat opsi dipilih
    };

    const renderContent = () => {
        const selectedData = coba.find(data => data.judul === selectedPage);
        if (selectedData?.url) {
            return (
                <div className="flex flex-col items-center md:px-12">
                    <div className='my-2 flex justify-center items-center w-full'>
                        <div className='w-full max-w-screen-lg flex justify-center'>
                            <div className='relative w-full' style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                                <iframe
                                    src={selectedData.url}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
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
        <div className="relative flex flex-col md:flex-row bg-blue-100">
            {/* Sidebar untuk Desktop dan Mobile */}
            <div
                className={`fixed inset-y-0 left-0 md:static md:w-1/4 bg-blue-100 text-white md:bg-transparent md:h-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 z-30'}`}
            >
                <div className="text-lg relative h-[80vh] overflow-y-scroll scrollbar-thin px-10 py-10">
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
            <div
                className={`flex-1 max-h-[84vh] pb-10 pt-10 relative overflow-y-auto transition-transform duration-300 ${isSidebarOpen ? 'transform translate-x-full' : 'transform translate-x-0'}`}
            >
                <button
                    className="md:hidden p-4 text-2xl fixed top-4 left-4 z-50 text-white rounded mb-10"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? '✕' : 'Materi'}
                </button>
                <div className={`page ${selectedPage}`}>
                    {renderContent()}
                </div>
            </div>

            {/* Overlay background pada desktop saat sidebar terbuka */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40 md:block hidden"></div>
            )}
        </div>
    );
}