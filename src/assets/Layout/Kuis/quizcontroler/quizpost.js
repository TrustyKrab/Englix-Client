import axios from 'axios'

export const postQuiz = async (data) => {
    try {
        await axios.post("https://englix-server.vercel.app/user/submitresult", data)
        alert("Hasil disimpan")
    } catch (error) {
        alert(error)
    }
} 