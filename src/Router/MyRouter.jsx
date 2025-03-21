import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from '../Commponents/Inicio/Inicio';
import MiEquipo from '../Commponents/Equipo/MiEquipo';
import Partidos from '../Commponents/Partidos/Partidos';
import VerJugadores from '../Commponents/Equipo/EquipoPages/VerJugadores';

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/equipo" element={<MiEquipo />} />
        <Route path="/verJugadores" element={<VerJugadores />} />
        <Route path="/partidos" element={<Partidos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter