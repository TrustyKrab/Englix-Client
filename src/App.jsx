import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './assets/Pages/LandingPage/LandingPage'
import FormLogin from './assets/Pages/RegisterLoginPage/FormLogin'
import FormRegister from './assets/Pages/RegisterLoginPage/FormRegister'
import FormForgotPass from './assets/Pages/RegisterLoginPage/FormForgotPass'
import HomePage from './assets/Pages/HomePage/HomePage'

import Kelas10Page from './assets/Pages/Kelas10Page/Kelas10Page'
import Kelas11Page from './assets/Pages/Kelas11Page/Kelas11Page'
import Kelas12Page from './assets/Pages/Kelas12Page/Kelas12Page'

import KuisM1K10 from './assets/Layout/Kuis/Kelas10/KuisM1K10'
import KuisM2K10 from './assets/Layout/Kuis/Kelas10/KuisM2K10'
import KuisM3K10 from './assets/Layout/Kuis/Kelas10/KuisM3K10'
import KuisM1K11 from './assets/Layout/Kuis/Kelas11/KuisM1K11'
import KuisM2K11 from './assets/Layout/Kuis/Kelas11/KuisM2K11'
import KuisM3K11 from './assets/Layout/Kuis/Kelas11/KuisM3K11'
import KuisM1K12 from './assets/Layout/Kuis/Kelas12/KuisM1K12'
import KuisM2K12 from './assets/Layout/Kuis/Kelas12/KuisM2K12'
import KuisM3K12 from './assets/Layout/Kuis/Kelas12/KuisM3K12'

import MateriM1K10 from './assets/Layout/Materi/Kelas10/MateriM1K10'
import MateriM2K10 from './assets/Layout/Materi/Kelas10/MateriM2K10'
import MateriM3K10 from './assets/Layout/Materi/Kelas10/MateriM3K10'
import MateriM4K10 from './assets/Layout/Materi/Kelas10/MateriM4K10'

import MateriM1K11 from './assets/Layout/Materi/Kelas11/MateriM1K11'
import MateriM2K11 from './assets/Layout/Materi/Kelas11/MateriM2K11'
import MateriM3K11 from './assets/Layout/Materi/Kelas11/MateriM3K11'
import MateriM4K11 from './assets/Layout/Materi/Kelas11/MateriM4K11'
import MateriM5K11 from './assets/Layout/Materi/Kelas11/MateriM5K11'
import MateriM6K11 from './assets/Layout/Materi/Kelas11/MateriM6K11'

import MateriM1K12 from './assets/Layout/Materi/Kelas12/MateriM1K12'
import MateriM2K12 from './assets/Layout/Materi/Kelas12/MateriM2K12'
import MateriM3K12 from './assets/Layout/Materi/Kelas12/MateriM3K12'
import MainPageK12 from './assets/Pages/Kelas12Page/MainPageK12'


// Latihan Listening
import MateriMain from './assets/Pages/MateriPages/MateriMain'
import LatihanPage from './assets/Pages/LatihanPage/LatihanPage'
import PilGanLatMudah from './assets/Layout/LatihanListening/LatihanMudah/PilGanLatMudah'
import LatihanMudah1 from './assets/Layout/LatihanListening/LatihanMudah/LatihanMudah1'
import PilGanLatMenengah from './assets/Layout/LatihanListening/LatihanMenengah/PilGanLatMenengah'
import LatihanMenengah from './assets/Layout/LatihanListening/LatihanMenengah/LatihanMenengah'
import PilGanLatSulit from './assets/Layout/LatihanListening/LatihanSulit/PilGanLatSulit'
import LatihanSulit from './assets/Layout/LatihanListening/LatihanSulit/LatihanSulit'

// Latihan Grammar
import StartMudLatGram from './assets/Layout/LatihanGrammar/LatGramMudah/StartMudLatGram'
import StartMenLatGram from './assets/Layout/LatihanGrammar/LatGramMenengah/StartMenLatGram'
import StartSulLatGram from './assets/Layout/LatihanGrammar/LatgramSulit/StartSulLatGram'
import LatihanGramMudah from './assets/Layout/LatihanGrammar/LatGramMudah/LatihanGramMudah'
import LatihanGramMenengah from './assets/Layout/LatihanGrammar/LatGramMenengah/LatihanGramMenengah'
import LatihanGramSulit from './assets/Layout/LatihanGrammar/LatgramSulit/LatihanGramSulit'


import ProfilePage from './assets/Pages/Profile/ProfilePage'

// bagian admin
import MainAdmin from './assets/Admin/MainAdmin';
import ViewUser from './assets/Admin/PageAdmin/ViewUser';
import AdminLogin from './assets/Admin/PageAdmin/AdminLogin';
import AdminRegister from './assets/Admin/PageAdmin/AdminRegister'
import MateriM4K12 from './assets/Layout/Materi/Kelas12/MateriM4K12'

function App() {
  return (
    <Router>
      <Routes>
        {/* landing page dan autentifikasi */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/FormLogin" element={<FormLogin />} />
        <Route path="/FormRegister" element={<FormRegister />} />
        <Route path='/FormForgotPass' element={<FormForgotPass />} />
        <Route path='/LandingPage' element={<LandingPage />} />
        {/* setelah login */}
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/HomePage/Profile/" element={<ProfilePage />} />

        {/* Kelas Page */}
        <Route path="/Kelas10Page" element={<Kelas10Page />} />
        <Route path="/Kelas11Page" element={<Kelas11Page />} />
        <Route path="/Kelas12Page" element={<Kelas12Page />} />

        {/* Materi Kelas 10 */}
        <Route path="/MateriM1K10" element={<MateriM1K10 />} />
        <Route path="/MateriM2K10" element={<MateriM2K10 />} />
        <Route path="/MateriM3K10" element={<MateriM3K10 />} />
        <Route path="/MateriM4K10" element={<MateriM4K10 />} />

        {/* Materi Kelas 11 */}
        <Route path="/MateriM1K11" element={<MateriM1K11 />} />
        <Route path="/MateriM2K11" element={<MateriM2K11 />} />
        <Route path="/MateriM3K11" element={<MateriM3K11 />} />
        <Route path="/MateriM4K11" element={<MateriM4K11 />} />
        <Route path="/MateriM5K11" element={<MateriM5K11 />} />
        <Route path="/MateriM6K11" element={<MateriM6K11 />} />

        {/* Materi Kelas 12 */}
        <Route path="/MateriM1K12" element={<MateriM1K12 />} />
        <Route path="/MateriM2K12" element={<MateriM2K12 />} />
        <Route path="/MateriM3K12" element={<MateriM3K12 />} />
        <Route path="/MateriM4K12" element={<MateriM4K12 />} />

        <Route path="/KuisM1K10" element={<KuisM1K10 />} />
        <Route path="/KuisM2k10" element={<KuisM2K10 />} />
        <Route path="/KuisM3K10" element={<KuisM3K10 />} />
        <Route path="/KuisM1K11" element={<KuisM1K11 />} />
        <Route path="/KuisM2K11" element={<KuisM2K11 />} />
        <Route path="/KuisM3K11" element={<KuisM3K11 />} />
        <Route path="/KuisM1K12" element={<KuisM1K12 />} />
        <Route path="/KuisM2K12" element={<KuisM2K12 />} />
        <Route path="/KuisM3K12" element={<KuisM3K12 />} />
        <Route path="/MateriMain" element={<MateriMain />} />

        {/* Latihan Listening */}
        <Route path="/LatihanPage" element={<LatihanPage />} />
        <Route path='/PilGanLatMudah' element={<PilGanLatMudah />} />
        <Route path='/LatihanMudah1' element={<LatihanMudah1 />} />
        <Route path='/PilGanLatMenengah' element={<PilGanLatMenengah />} />
        <Route path='LatihanMenengah' element={<LatihanMenengah />} />
        <Route path='/PilGanLatSulit' element={<PilGanLatSulit />} />
        <Route path='/LatihanSulit' element={<LatihanSulit />} />

        {/* Latihan Grammar */}
        <Route path='/StartMudLatGram' element={<StartMudLatGram />} />
        <Route path='/StartMenLatGram' element={<StartMenLatGram />} />
        <Route path='/StartSulLatGram' element={<StartSulLatGram />} />
        <Route path='/LatihanGramMudah' element={<LatihanGramMudah />} />
        <Route path='/LatihanGramMenengah' element={<LatihanGramMenengah />} />
        <Route path='/LatihanGramSulit' element={<LatihanGramSulit />} />

        {/* bagian admin */}
        <Route path="/admin" element={<MainAdmin />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin/viewuser/:id" element={<ViewUser />} />
      </Routes>
    </Router>
  )
}
export default App
