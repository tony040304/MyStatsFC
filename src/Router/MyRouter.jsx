import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import Inicio from '../Components/Inicio/Inicio';
import MiEquipo from '../Components/Equipo/MiEquipo';
import Partidos from '../Components/Partidos/Partidos';
import VerJugadores from '../Components/Equipo/EquipoPages/VerJugadores';
import NuevoFichaje from '../Components/Equipo/EquipoPages/NuevoFichaje';
import EditarEquipo from '../Components/Equipo/EquipoPages/EditarEquipo';


const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/equipo" element={<MiEquipo />} />
        <Route path="/verJugadores" element={<VerJugadores />} /> 
        <Route path="/nuevoFichaje" element={<NuevoFichaje />} />
        <Route path="/editarEquipo" element={<EditarEquipo />} />
        <Route path="/partidos" element={<Partidos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter