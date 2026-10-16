import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/home'
import { SinopsisPage } from './pages/SinopsisPage'
import Login from './pages/Login'
import Registro from './pages/Registro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinopsis/:id" element={<SinopsisPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
