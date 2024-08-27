import React, { useState } from 'react';
import MateriM1K12 from '../../Layout/Materi/Kelas12/MateriM1K12';
import KuisM1K12 from '../../Layout/Kuis/Kelas12/KuisM1K12';
import MateriM2K12 from '../../Layout/Materi/Kelas12/MateriM2K12';
import KuisM2K12 from '../../Layout/Kuis/Kelas12/KuisM2K12';
import MateriM3K12 from '../../Layout/Materi/Kelas12/MateriM3K12';
import KuisM3K12 from '../../Layout/Kuis/Kelas12/KuisM3K12';
import MateriM4K12 from '../../Layout/Materi/Kelas12/MateriM4K12';
import KuisM4K12 from '../../Layout/Kuis/Kelas12/KuisM4K12';
import MainPageK12 from './MainPageK12';
import "./SidebarK12.css";

export default function SidebarK11() {
    const [selectedPage, setSelectedPage] = useState('introduction');

    const coba = [
        { judul: "introduction", component: MainPageK12 },

        { judul: "Common Expressions 3", url: "https://www.youtube.com/embed/cye0TQPksv0?si=AE3KvoTTL9q15HV7", description1: "Discover common expressions used in everyday conversations", description2: 'text', description3: 'ohiya' },

        { judul: "Quiz Common Expressions ", component: KuisM1K12 },

        { judul: "Conditional Sentences", url: "https://www.youtube.com/embed/m9QVLBWEwhg?si=jKLn7m-68t2Rf_Vx", description1: "Discover common expressions used in everyday conversations", description2: 'text', description3: 'ohiya' },

        { judul: "Quiz Conditional Sentences", component: KuisM2K12 },

        { judul: "Indirect Speech ", url: "https://www.youtube.com/embed/Xkuz49O9Kh0?si=nUlLISfi_1__Vln1", description1: "Discover common expressions used in everyday conversations", description2: 'text', description3: 'ohiya' },

        { judul: "Quiz Indirect Speech ", component: KuisM3K12 },

        { judul: "Types of Sentences", url: "https://www.youtube.com/embed/PwIM-l9vOJ4?si=vHEa0zTYskRbQ_gM", description1: "Discover common expressions used in everyday conversations", description2: 'text', description3: 'ohiya' },

        { judul: "Quiz Types of Sentences", component: KuisM4K12 },
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
