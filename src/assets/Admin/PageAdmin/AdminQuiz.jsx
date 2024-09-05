import React, { useState } from "react";

const AdminQuiz = () => {
    const [selectedClass, setSelectedClass] = useState('Kelas 10');
    const [quizzes, setQuizzes] = useState([
        {
            class: 'Kelas 10',
            title: 'Vocabulary Quiz',
            level: 'Beginner',
            questionsCount: 10
        },
        {
            class: 'Kelas 11',
            title: 'Advanced Grammar Quiz',
            level: 'Advanced',
            questionsCount: 15
        },
        {
            class: 'Kelas 12',
            title: 'Commonly Used Words Quiz',
            level: 'Intermediate',
            questionsCount: 12
        }
    ]);

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
    };

    const filteredQuizzes = quizzes.filter(quiz => quiz.class === selectedClass);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">Admin Kuis</h1>
                <p className="text-gray-600">Kelola kuis untuk Kelas 10, 11, dan 12</p>
            </div>

            {/* Dropdown untuk memilih kelas */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classSelect">
                    Pilih Kelas:
                </label>
                <select
                    id="classSelect"
                    value={selectedClass}
                    onChange={handleClassChange}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                >
                    <option value="Kelas 10">Kelas 10</option>
                    <option value="Kelas 11">Kelas 11</option>
                    <option value="Kelas 12">Kelas 12</option>
                </select>
            </div>

            {/* Menampilkan daftar kuis */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Daftar Kuis untuk {selectedClass}</h2>
                {filteredQuizzes.length > 0 ? (
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border">Judul Kuis</th>
                                <th className="py-2 px-4 border">Level</th>
                                <th className="py-2 px-4 border">Jumlah Pertanyaan</th>
                                <th className="py-2 px-4 border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredQuizzes.map((quiz, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border">{quiz.title}</td>
                                    <td className="py-2 px-4 border">{quiz.level}</td>
                                    <td className="py-2 px-4 border">{quiz.questionsCount}</td>
                                    <td className="py-2 px-4 border">
                                        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 text-white px-4 py-1 ml-2 rounded hover:bg-red-700">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-600">Tidak ada kuis untuk kelas ini.</p>
                )}
            </div>

            {/* Tombol Tambah Kuis */}
            <div className="mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                    Tambah Kuis Baru
                </button>
            </div>
        </div>
    );
};

export default AdminQuiz;
