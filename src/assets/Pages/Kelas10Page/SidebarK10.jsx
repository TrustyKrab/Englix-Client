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
    const [selectedPage, setSelectedPage] = useState('introduction');

    const coba = [
        { judul: "introduction", component: MainPageK10 },

        { judul: "Basic English in Introduction", url: "https://www.youtube.com/embed/WADirgJdrmc?si=vJHpY2Ex3lietrKT", description1: 'Video ini menjelaskan tentang "Basic English in Introduction"', description2: 'Pada video materi ini diharapkan siswa dapat memahami dan memiliki keterampilan dalam konsep dalam Bahasa Inggris. Dan dapat memberikan pondasi untuk memahami, berbicara, membaca dan menulis dalam Bahasa Inggris.', description3: 'Pada video materi ini membahas mengenai Pengertian dan elemen-elemen dasar pada Bahasa Inggris. Seperti Greetings, Introduction Yourself, Asking for Personal Information, Basic Responses dan Common Phrases. Dan juga membahas tentang struktur pada Basic Sentences.' },

        { judul: "Quiz Basic English in Introduction", component: KuisM1K10 },

        { judul: "Common Expressions", url: "https://www.youtube.com/embed/W0WSj_Azyxg?si=erye6uN5eF5c0v3n", description1: "Discover common expressions used in everyday conversations", description2: 'text', description3: 'ohiya' },

        { judul: "Quiz Common Expressions", component: KuisM2K10 },

        { judul: "Past tense", url: "https://www.youtube.com/embed/yNsNbkqeow0?si=WTmD4VqfYZvWZQZ7", description1: "Understand the concept of past tense in English grammar", description2: '', description3: '' },

        { judul: "Quiz Past tense", component: KuisM3K10 },

        { judul: "Announcement", url: "https://www.youtube.com/embed/83inl1XnW-I?si=Cgk5geyZ9ohZUOH7", description1: "Learn how to make announcements in English", description2: '', description3: '' },

        { judul: "Quiz Announcement", component: KuisM4K10 },
    ];

    const renderContent = () => {
        const selectedData = coba.find(data => data.judul === selectedPage);
        if (selectedData?.url) {
            return (
                <div>
                    <div className='mx-auto my-4 flex justify-center items-center'>
                        <div>
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