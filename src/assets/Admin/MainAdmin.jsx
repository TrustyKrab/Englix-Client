import Home from "./PageAdmin/Home"
import DataUser from "./PageAdmin/DataUser"
import UserActifity from "./PageAdmin/UserActifity"
import NavAdmin from "./ComponentAdmin/NavAdmin"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const MainAdmin = () => {
    const navigate = useNavigate()
    const [display, setDisplay] = useState('home')
        useEffect(() => {
            const getTokenAndDecode = async () => {
            const token = await localStorage.getItem("token");
            if (!token) {
                navigate("/adminLogin")
            } 
            };
            getTokenAndDecode();
        }, [navigate]);

    axios.defaults.withCredentials = true

    return(
        <>
        <NavAdmin setDisplay={setDisplay}/>
        <div className="py-20 h-screen overflow-y-scroll">
        {display === 'home' &&  <Home/>}
        {display === 'user-acout' && <DataUser/>}
        {display === 'user-actifity' && <UserActifity/>}
        </div>
        {/* <div className="w-full h-screen flex">
            <Sidebar
                setDisplay={setDisplay}
            />
            <div className="relative w-full">
            {display === 'home' && 
                <Home
                setDisplay={setDisplay}
                />}
            {display === 'datauser' && <DataUser/>}
            {display === 'addmodules' && 
            <AddModules
                setDisplay={setDisplay}
            />}
            {display === 'viewmodules' && <ViewModules/>}
            {display === 'feedback' && <FeedBack/>}
            </div>
        </div> */}

        </>
    )
}

export default MainAdmin