import React, { useState } from 'react';
import KuisM1K11 from '../../Layout/Kuis/Kelas11/KuisM1K11';
import KuisM2K11 from '../../Layout/Kuis/Kelas11/KuisM2K11';
import KuisM3K11 from '../../Layout/Kuis/Kelas11/KuisM3K11';
import KuisM4K11 from '../../Layout/Kuis/Kelas11/KuisM4K11';
import KuisM5K11 from '../../Layout/Kuis/Kelas11/KuisM5K11';
import KuisM6K11 from '../../Layout/Kuis/Kelas11/KuisM6K11';
import MainPageK11 from './MainPagek11'
import "./SidebarK11.css";

export default function SidebarK11() {
    const coba = [
        { judul: "introduction", component: MainPageK11 },

        {
            judul: "Common Expressions 2",
            url: "https://www.youtube.com/embed/Iyu89WDBPIY?si=sw0O26-Lghns2_ml",
            description1: 'Common Expressions 2',
            description2: 'Common Expressions 2 dalam bahasa Inggris melanjutkan pembahasan mengenai ekspresi-ekspresi umum yang sering digunakan dalam percakapan sehari-hari. Jika Common Expressions 1 mencakup frasa dasar untuk menyapa, memperkenalkan diri, dan bertanya kabar, maka Common Expressions 2 akan mencakup ekspresi yang lebih beragam dan spesifik untuk situasi berbeda.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah contoh-contoh common expressions yang digunakan dalam kondisi tertentu dan sedikit contoh dari Idioms.'
        },

        { judul: "Quiz Common Expressions 2", component: KuisM1K11 },

        {
            judul: "Perfecting Perfect Tenses",
            url: "https://www.youtube.com/embed/zToi6O_k964?si=Tdn3dSJi9HXwTvag",
            description1: 'Perfecting Perfect Tenses',
            description2: 'Perfecting Perfect Tenses adalah pendekatan untuk memahami dan menggunakan tenses perfect dalam bahasa Inggris dengan tepat. Tenses ini mencakup Present Perfect, Past Perfect, dan Future Perfect. Masing-masing tense digunakan untuk menggambarkan tindakan atau keadaan yang terjadi dalam hubungan waktu tertentu.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah contoh-contoh tense, penggunaan tense dan struktur dari tense.'
        },

        { judul: "Quiz Perfecting Perfect Tenses", component: KuisM2K11 },

        {
            judul: "Passive Voice",
            url: "https://www.youtube.com/embed/DxILZzHKQNs?si=EWTZ-pQSljHSl-hB",
            description1: "Passive Voice",
            description2: 'Passive Voice adalah konstruksi kalimat di mana objek dalam kalimat aktif menjadi subjek. Pemilihan tense dalam passive voice sangat bergantung pada tense yang digunakan dalam kalimat aktif aslinya.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah pembentukan-pembentukan pada passive voice seperti pada Present Simple, Past Simple, Future Simple, Present Continuous, Past Continuous, Present Perfect, Past Perfect dan Future Perfect.'
        },

        { judul: "Quiz Passive Voice", component: KuisM3K11 },

        {
            judul: "Explanation Text",
            url: "https://www.youtube.com/embed/SfvH2-1JydQ?si=3alY1i6uROjC4EHr",
            description1: "Explanation Text",
            description2: 'Explanation Text adalah jenis teks yang bertujuan untuk menjelaskan bagaimana atau mengapa sesuatu terjadi. Teks ini sering digunakan untuk menjelaskan proses alami, fenomena ilmiah, atau bagaimana sesuatu bekerja. Teks penjelasan biasanya ditulis dalam urutan logis atau kronologis dan sering mencakup langkah-langkah atau tahapan yang terlibat dalam proses yang sedang dijelaskan.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah struktur dari explanation text dan contoh dari explanation text.'
        },

        { judul: "Quiz Explanation Text", component: KuisM4K11 },

        {
            judul: "Exposition Text",
            url: "https://www.youtube.com/embed/nTCyw2F7ME0?si=a2tarpbmzi1-miHh",
            description1: "Exposition Text",
            description2: 'Exposition Text adalah jenis teks yang digunakan untuk mengemukakan argumen atau pendapat dan memberikan alasan serta bukti untuk mendukungnya. Teks ini bertujuan untuk meyakinkan pembaca atau pendengar mengenai suatu topik atau posisi tertentu. Exposition text sering ditemukan dalam esai argumentatif, artikel opini, dan pidato persuasif.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah struktur dari exposition text dan contoh dari exposition text.'
        },

        { judul: "Quiz Exposition Text", component: KuisM5K11 },

        {
            judul: "Grammar Intermediate",
            url: "https://www.youtube.com/embed/-AA7svxZZv0?si=PUhFJE9XXZ4DGhCA",
            description1: "Grammar Intermediate",
            description2: 'Grammar Intermediate mengacu pada tingkat keterampilan tata bahasa yang berada di antara pemula (beginner) dan lanjutan (advanced). Pada tingkat ini, pembelajar diharapkan memiliki pemahaman dasar yang baik tentang struktur bahasa dan mulai menguasai aturan tata bahasa yang lebih kompleks.',
            description3: 'Materi yang akan dipelajari pada video kali ini adalah contoh-contoh grammar intermediate yang digunakan pada Tense, Conditional Text, Passive Voice, Modals, Relatives Clauses, Gerunds and Infinitives dan terakhir pada Comparatives and Superlatives'
        },

        { judul: "Quiz Grammar Intermediate", component: KuisM6K11 },
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
                <div className="text-lg relative h-[80vh] overflow-y-scroll scrollbar-thin px-10 py-10 md:py-10 sm:py-14">
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