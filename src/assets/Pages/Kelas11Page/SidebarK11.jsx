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
            description1: 'Video ini membahas tentang "Common Expressions 2"',
            description2: 'Pada Video Materi ini, adalah lanjutan dari "Common Exoression" di kelas 10. Pada materi ini membahas tentang pengertian dari "Common Expression", contohnya dalam kondisi tertentu, dan beberapa idioms',
            description3: 'Diharapkan setelah menonton video ini, siswa dapat memahami dan dapat meningkatkan skill dalam bahasa Inggris'
        },

        { judul: "Quiz Common Expressions 2", component: KuisM1K11 },

        {
            judul: "Perfecting Perfect Tenses",
            url: "https://www.youtube.com/embed/zToi6O_k964?si=Tdn3dSJi9HXwTvag",
            description1: 'Video ini menjelaskan ',
            description2: 'text',
            description3: 'ohiya'
        },

        { judul: "Quiz Perfecting Perfect Tenses", component: KuisM2K11 },

        {
            judul: "Passive Voice",
            url: "https://www.youtube.com/embed/DxILZzHKQNs?si=EWTZ-pQSljHSl-hB",
            description1: "Discover common expressions used in everyday conversations",
            description2: 'text',
            description3: 'ohiya'
        },

        { judul: "Quiz Passive Voice", component: KuisM3K11 },

        {
            judul: "Explanation Text",
            url: "https://www.youtube.com/embed/SfvH2-1JydQ?si=3alY1i6uROjC4EHr",
            description1: "Discover common expressions used in everyday conversations",
            description2: 'text',
            description3: 'ohiya'
        },

        { judul: "Quiz Explanation Text", component: KuisM4K11 },

        {
            judul: "Exposition Textcement",
            url: "https://www.youtube.com/embed/nTCyw2F7ME0?si=a2tarpbmzi1-miHh",
            description1: "Discover common expressions used in everyday conversations",
            description2: 'text',
            description3: 'ohiya'
        },

        { judul: "Quiz Exposition Text", component: KuisM5K11 },

        {
            judul: "Grammar Intermediate",
            url: "https://www.youtube.com/embed/-AA7svxZZv0?si=PUhFJE9XXZ4DGhCA",
            description1: "Discover common expressions used in everyday conversations",
            description2: 'text',
            description3: 'ohiya'
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
