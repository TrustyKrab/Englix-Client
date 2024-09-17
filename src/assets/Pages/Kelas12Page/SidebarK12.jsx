import React, { useState } from 'react';
import KuisM1K12 from '../../Layout/Kuis/Kelas12/KuisM1K12';
import KuisM2K12 from '../../Layout/Kuis/Kelas12/KuisM2K12';
import KuisM3K12 from '../../Layout/Kuis/Kelas12/KuisM3K12';
import KuisM4K12 from '../../Layout/Kuis/Kelas12/KuisM4K12';
import MainPageK12 from './MainPageK12';
import "./SidebarK12.css";

export default function SidebarK11() {
    const coba = [
        { judul: "introduction", component: MainPageK12 },

        {
            judul: "Common Expressions 3",
            url: "https://www.youtube.com/embed/cye0TQPksv0?si=AE3KvoTTL9q15HV7",
            description1: "Common Expression 3",
            description2: 'Common Expression 3 merujuk pada kumpulan ekspresi umum dalam bahasa Inggris yang sering digunakan dalam percakapan sehari-hari. Ekspresi ini berguna untuk meningkatkan kemampuan komunikasi siswa dengan menggunakan frasa yang sering digunakan oleh penutur asli bahasa Inggris.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah contoh-contoh yang ada pada common expression 3 ini seperti Expression for Opinions, Expressions for Agreement and Disagreement, Expressions for Giving Advice, Expressions for Making Requests, Expressions for Expressing Surprise, Expressions for Apologize, Expressions for Providing Clarification, Expressions for Giving Examples dan Expressions for Agreeing to Terms'
        },

        { judul: "Quiz Common Expressions ", component: KuisM1K12 },

        {
            judul: "Conditional Sentences",
            url: "https://www.youtube.com/embed/m9QVLBWEwhg?si=jKLn7m-68t2Rf_Vx",
            description1: "Conditional Sentences",
            description2: 'Conditional Sentences digunakan untuk menyatakan situasi yang bergantung pada kondisi tertentu. Biasanya, conditional sentences terdiri dari dua klausa: klausa kondisi (if-clause) dan klausa utama (main clause). Ada beberapa tipe conditional sentences, masing-masing dengan struktur dan penggunaan yang berbeda.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah tipe-tipe dari Conditional Sentences seperti Zero Conditional, First Conditional, Second Conditional, Third Conditional dan Mixed Conditional.'
        },

        { judul: "Quiz Conditional Sentences", component: KuisM2K12 },

        {
            judul: "Indirect Speech ",
            url: "https://www.youtube.com/embed/Xkuz49O9Kh0?si=nUlLISfi_1__Vln1",
            description1: "Indirect Speech",
            description2: 'Indirect Speech adalah cara untuk melaporkan atau menyampaikan apa yang dikatakan oleh orang lain tanpa menggunakan kutipan langsung. Dalam indirect speech, kita mengubah kata-kata asli dari pembicara menjadi kalimat yang lebih umum. Ini sering digunakan dalam penulisan dan percakapan untuk mengkomunikasikan informasi yang disampaikan oleh orang lain.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah struktur dan aturan pada Indirect Speech. Video kali ini juga akan membahas jenis-jenis dari Indirect Speech.'
        },

        { judul: "Quiz Indirect Speech ", component: KuisM3K12 },

        {
            judul: "Types of Sentences",
            url: "https://www.youtube.com/embed/PwIM-l9vOJ4?si=vHEa0zTYskRbQ_gM",
            description1: "Types of Sentences",
            description2: 'Types of Sentences mengacu pada berbagai bentuk kalimat yang digunakan untuk menyampaikan informasi dengan cara yang berbeda. Setiap jenis kalimat memiliki fungsi dan struktur khusus.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah jenis-jenis dari Types of Sentences seperti Declarative Sentences, Interrogative Sentences, Imperative Sentences dan Exclamatory Sentences.'
        },

        { judul: "Quiz Types of Sentences", component: KuisM4K12 },
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
        <div className="relative flex flex-col md:flex-row bg-blue-100 ">
            {/* Sidebar untuk Desktop dan Mobile */}
            <div
                className={`fixed inset-y-0 left-0 top-1/4 md:static md:w-1/4 bg-blue-100 text-white md:bg-transparent md:h-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 z-30'}`}
            >
                <div className="text-lg relative h-[80vh] overflow-y-scroll scrollbar-thin px-10 py-2 pb-10 md:py-10 sm:py-14">
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
                    className="md:hidden p-4 text-2xl fixed top-4 left-4 z-50 text-white rounded"
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