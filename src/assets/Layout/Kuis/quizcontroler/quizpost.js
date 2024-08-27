import axios from 'axios'

export const postQuiz = async (data) => {
    try {
        await axios.post("http://localhost:3000/user/submitresult", data)
        alert("Hasil disimpan")
    } catch (error) {
        alert(error)
    }
} 