import axios from 'axios'

export const postQuiz = async (data) => {
    try {
        await axios.post("https://englix-server-q8atff73o-fathihprs-projects.vercel.app//user/submitresult", data)
        alert("Hasil disimpan")
    } catch (error) {
        alert(error)
    }
} 