import React from 'react'
import NavbarHome from '../../Layout/Navbar/NavbarHome'
import { Link } from 'react-router-dom'



export default function MateriMain() {

    return (
        <div className=' bg-blue-100 font-main'>
            <div>
                <div>
                    <NavbarHome />
                </div>
                <div className='py-20'>
                    <div className='flex justify-center my-10'>
                        <h1 className='font-bold text-2xl'>Pilih Materi Berdasarkan Kelas</h1>
                    </div>

                    {/* kelas 10 */}
                    <div className="mx-24 pt-7 px-1 rounded-xl bg-pink-400 drop-shadow-2xl shadow-2xl">
                        <h1 className="mb-2 mx-2 font-semibold text-white">Materi Kelas 10 :</h1>
                        <div className="flex flex-wrap justify-center mt-4">
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM1K10">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM1K10.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Basic English in Introduction</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM2K10">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM2K10.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Common Expressions</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM4K10">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM4K10.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Past Tense</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM3K10">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM3K10.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Announcement</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-20"></div>
                    </div>

                    {/* kelas 11 */}
                    <div className="mx-32 pt-7 px-4 rounded-xl bg-pink-400 drop-shadow-2xl shadow-2xl">
                        <h1 className="mb-2 mx-2 font-semibold text-white">Materi Kelas 11 :</h1>
                        <div className="flex flex-wrap justify-center mt-4">
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM1K11">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM1K11.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Common Expressions 2</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM2K11">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM2K11.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Perfecting Perfect Tenses</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM3K11">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM3K11.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Passive Voice</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM4K11">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM4K11.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Explanation Text</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM5K11">
                                    <div className="hover :bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM5K11.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Exposition Text</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM6K11">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM6K11.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Grammar Intermediate</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-20"></div>
                    </div>

                    {/* kelas 12 */}
                    <div className="mx-32 pt-7 px-4 rounded-xl bg-pink-400 drop-shadow-2xl shadow-2xl">
                        <h1 className="mb-2 mx-2 font-semibold text-white">Materi Kelas 12 :</h1>
                        <div className="flex flex-wrap justify-center mt-4">
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM1K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM1K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Common Expressions 3</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM2K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM2K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Conditional Sentences</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM3K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM3K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Indirect Speech</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-2 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full">
                                <Link to="/MateriM4K12">
                                    <div className="hover:bg-blue-300 rounded-xl py-4 border-slate-300 mb-10 bg-white hover:text-white hover:scale-105 transition duration-200 hover:drop-shadow-xl">
                                        <div className='justify-center flex px-3'>
                                            <img src="CoverM4K12.png" alt="" width="w-full" className="rounded-xl" />
                                        </div>
                                        <h1 className='text-center mt-5'>Types of Sentences</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-20"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
