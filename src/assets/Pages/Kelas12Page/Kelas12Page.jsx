import React from 'react'
import NavbarHome from '../../Layout/Navbar/NavbarHome'
import SidebarK12 from './SidebarK12'

function Kelas12Page() {
    return (
        <>
            <NavbarHome />
            <div className="bg-blue-100 py-20 w-full font-main">

                <div className="flex-1 h-[77vh] ">
                    <SidebarK12 />
                </div>
            </div>
        </>
    )
}

export default Kelas12Page