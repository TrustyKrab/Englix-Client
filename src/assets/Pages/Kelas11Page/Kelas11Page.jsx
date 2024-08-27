import React from 'react'
import { Link } from "react-router-dom"
import NavbarHome from '../../Layout/Navbar/NavbarHome'
import SidebarK11 from './SidebarK11'

function Kelas11Page() {
    return (
        <>
            <NavbarHome />
            <div className="bg-blue-100  py-20 w-full font-main">

                <div className="flex-1 h-[77vh] ">
                    <SidebarK11 />
                </div>
            </div>
        </>
    )
}

export default Kelas11Page