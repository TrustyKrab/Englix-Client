import React from 'react';
import SidebarK10 from './SidebarK10';
import NavbarHome from '../../Layout/Navbar/NavbarHome';

export default function Kelas10Page() {
    return (
        <>
            <NavbarHome />
            <div className="bg-blue-100 py-20 w-full h-screen font-main flex">
                <div className="flex-1 mt-5">
                    <SidebarK10 />
                </div>
            </div>
        </>
    );
}
