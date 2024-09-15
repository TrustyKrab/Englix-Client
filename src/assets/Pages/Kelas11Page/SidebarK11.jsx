import React, { useState } from 'react';
import MateriM1K11 from '../../Layout/Materi/Kelas11/MateriM1K11';
import KuisM1K11 from '../../Layout/Kuis/Kelas11/KuisM1K11';
import MateriM2K11 from '../../Layout/Materi/Kelas11/MateriM2K11';
import KuisM2K11 from '../../Layout/Kuis/Kelas11/KuisM2K11';
import MateriM3K11 from '../../Layout/Materi/Kelas11/MateriM3K11';
import KuisM3K11 from '../../Layout/Kuis/Kelas11/KuisM3K11';
import MateriM4K11 from '../../Layout/Materi/Kelas11/MateriM4K11';
import KuisM4K11 from '../../Layout/Kuis/Kelas11/KuisM4K11';
import MateriM5K11 from '../../Layout/Materi/Kelas11/MateriM5K11';
import KuisM5K11 from '../../Layout/Kuis/Kelas11/KuisM5K11';
import MateriM6K11 from '../../Layout/Materi/Kelas11/MateriM6K11';
import KuisM6K11 from '../../Layout/Kuis/Kelas11/KuisM6K11';
import MainPageK11 from './MainPagek11'
import "./SidebarK11.css";

export default function SidebarK11() {
    const [selectedPage, setSelectedPage] = useState('introduction');

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

    const renderContent = () => {
        const selectedData = coba.find(data => data.judul === selectedPage);
        if (selectedData?.url) {
            return (
                <div>
                    <div>
                        <div className='mx-auto my-4 flex justify-center items-center'>
                            <iframe
                                width="885"
                                height="500"
                                src={selectedData.url}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="rounded-2xl flex mb-10">
                            </iframe>
                        </div>
                        <div className='bg-pink-500 py-4 px-5 mx-20 rounded-2xl text-center'>
                            <div className='py-2 px-3 mb-5 bg-white text-black rounded-xl'>
                                <h1 className='font-bold text-2xl'>{selectedData.description1}</h1>
                            </div>
                            <div className='py-2 px-3 mb-5 bg-white text-black rounded-xl'>
                                <h1 className='font-semibold text-lg'>{selectedData.description2}</h1>
                            </div>
                            <div className='py-2 px-3 bg-white text-black rounded-xl'>
                                <h1 className='font-semibold text-lg'>{selectedData.description3}</h1>
                            </div>
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
        <div className="flex ml-3">
            <div className="w-1/4 relative h-[80vh] overflow-y-scroll py-4 pr-3 pl-2 mt-3">
                <div className="">
                    <div className="text-lg relative overflow-x-hidden px-5">
                        {coba.map((data, index) => (
                            <a
                                key={index}
                                onClick={() => setSelectedPage(data.judul)}
                                className={`sidebar-item ${selectedPage === data.judul ? 'active' : ''}`}>
                                <div className="mb-2 py-2 px-8 border-b-2 rounded-lg hover:scale-105 transition duration-500 hover:drop-shadow-xl">
                                    {data.judul}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-3/4 max-h-[84vh] pb-10 relative overflow-y-auto pt-3 px-12">
                <div className={`page ${selectedPage}`}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
