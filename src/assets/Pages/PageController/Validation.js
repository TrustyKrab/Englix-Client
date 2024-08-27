import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Validation = () => {
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const storedUsername = await localStorage.getItem("username");
            if (storedUsername) {
                try {
                    setUsername(storedUsername);
                    const response = await axios.get(`http://localhost:3000/user/getUserByUsername?username=${storedUsername}`);
                    setUserId(response.data._id);
                } catch (error) {
                    console.error("Error fetching user data", error);
                }
            } else {
                navigate('/');
            }
        };
        fetchUserData();
    }, [navigate]);

    return { username, userId };
};