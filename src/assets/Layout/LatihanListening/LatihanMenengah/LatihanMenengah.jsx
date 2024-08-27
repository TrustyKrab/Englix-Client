import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";
import NavbarHome from "../../Navbar/NavbarHome";
import PilGanLatMenengah from "./PilGanLatMenengah";
import { Link } from "react-router-dom";

function LatihanMenengah() {
    const waveformRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [waveSurfer, setWaveSurfer] = useState(null);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#ddd",
            progressColor: "#4a90e2",
            height: 50,
            responsive: true,
            barWidth: 3, // reduce bar width to make waveform shorter
            barHeight: 5, // reduce bar height to make waveform shorter
            cursorColor: "transparent",
            barRadius: 10,
            normalize: true,
            partialRender: true,
        });
        // import musik
        wavesurfer.load('/LatihanMenengah1.mp3');
        setWaveSurfer(wavesurfer);

        wavesurfer.on('finish', () => {
            setIsPlaying(false);
        });

        return () => {
            wavesurfer.destroy();
        };
    }, []);

    const handlePlayPause = () => {
        if (isPlaying) {
            waveSurfer.pause();
        } else {
            waveSurfer.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className="font-main bg-blue-100 h-[98vh]">
                <NavbarHome />
                <div className="px-36 py-24 mt-3 ">
                    <h1 className="text-center mt-20 text-2xl">Dengarkan Conversation di Bawah untuk mengerjakan soal selanjutnya.</h1>
                    <p className="text-center my-10 text-lg">Jumlah soal : 5</p>
                    <div className="flex justify-center mb-10">
                        <div className="rounded-xl bg-pink-500 flex items-center justify-center px-5">
                            <button
                                onClick={handlePlayPause}
                                className=" bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
                            >
                                {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
                            </button>
                            <div ref={waveformRef} className="w-52 py-5 px-2 ">
                            </div>
                        </div>
                    </div>
                    <Link to="/PilGanLatMenengah">
                        <div className="flex justify-center items-center">
                            <button className="text-center text-white font-medium text-lg bg-blue-500 hover:bg-pink-500 py-1 px-5 rounded-lg">Start</button>
                        </div>
                    </Link>
                </div>
                <div className="pb-20"></div>
            </div >
        </>
    );
}

export default LatihanMenengah;
