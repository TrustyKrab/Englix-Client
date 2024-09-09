import React from 'react'
import SidebarK10 from './SidebarK10'
import NavbarHome from '../../Layout/Navbar/NavbarHome'

export default function Kelas10Page() {

    return (
        <div class="container mx-auto p-4 md:p-6 lg:p-8">
            <NavbarHome />
            <div class="bg-blue-100 py-20 w-full font-main">
                <div class="flex-1 h-screen md:h-[70vh] lg:h-[80vh]">
                    <SidebarK10 />
                </div>
            </div>
        </div>
    )
}