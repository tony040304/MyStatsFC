import React from 'react'
import Navbar from '../../Navbar/Navbar'

const VerJugadores = () => {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen w-full flex flex-col items-center justify-center'>
            <table className='table-fixed w-140 border-2 rounded-xl overflow-hidden'>
                <thead>
                    <tr className='odd:bg-white even:bg-gray-50  dark:odd:bg-gray-900  dark:even:bg-gray-900 text-cyan-50'>
                        <th>Nombre</th>
                        <th>Partidos</th>
                        <th>Goles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='even:bg-white odd:bg-gray-50 dark:even:bg-gray-900  dark:odd:bg-pink-950 text-cyan-50'> 
                        <td>Marcelito</td>
                        <td>10</td>
                        <td>30</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default VerJugadores