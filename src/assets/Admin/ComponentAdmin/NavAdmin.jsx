import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavAdmin = ({ setDisplay }) => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState('home');

    const handleLogout = () => {
        localStorage.removeItem("token");
        axios.get('http://localhost:3000/admin/logout')
            .then(res => {
                if (res.data.status) {
                    navigate('/adminLogin');
                }
            }).catch(err => console.log(err));
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
        setDisplay(item);
    };

    return (
        <>
            <nav className="w-full py-4 fixed top-0 left-0 right-0 bg-sky-500 px-8">
                <div className="w-full flex justify-between items-center">
                    <div>
                        <img src="logoNoBackground.png" className="w-20" alt="Logo" />
                    </div>
                    <ul className="flex justify-evenly gap-x-5">
                        <li
                            onClick={() => handleItemClick('home')}
                            className={`font-bold cursor-pointer ${activeItem === 'home' ? 'text-pink-500' : 'text-white'
                                } hover:text-pink-500`}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => handleItemClick('user-acout')}
                            className={`font-bold cursor-pointer ${activeItem === 'user-acout' ? 'text-pink-500' : 'text-white'
                                } hover:text-pink-500`}
                        >
                            User Account
                        </li>
                        <li
                            onClick={() => handleItemClick('user-actifity')}
                            className={`font-bold cursor-pointer ${activeItem === 'user-actifity' ? 'text-pink-500' : 'text-white'
                                } hover:text-pink-500`}
                        >
                            User Activity
                        </li>
                    </ul>
                    <button
                        onClick={handleLogout}
                        className="text-sm italic bg-red-600 rounded text-white cursor-pointer py-1 font-bold px-3"
                    >
                        Log Out
                    </button>
                </div>
            </nav>
        </>
    );
};

export default NavAdmin;
