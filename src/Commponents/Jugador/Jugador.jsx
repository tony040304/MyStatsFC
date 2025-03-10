import React from 'react'
import Cho from '/cho.jpg'
import { Data } from '../../Data/Data'

const Jugador = () => {
  var jugadores = Data

  console.log(jugadores)
    
  return (
    <div>
          <div className='m-auto flex flex-row bg'>
            <div className='bg-gray-900 flex flex-row w-150 h-auto m-auto my-64 rounded-xl'>
              <div className='flex flex-row content-center '>
                  <img src={Cho} alt="" className='w-30 h-40 rounded-full object-cover mr-8 ml-10 mt-10 mb-auto'/>
              </div>
              <div className='flex flex-col m-4 '>
                  <h6 className='text-slate-200 mt-12 mb-6 text-xl'>
                    Antonio Torralba
                  </h6>
              <div className='flex flex-col ml-auto mr-auto'>
                <h3 className='text-slate-300'>Goles:</h3>
                {
                  jugadores.map((goles, index) => {
                    return (
                      <div key={index} className='flex flex-row'>
                        <h1 className='text-slate-400 hover:bg-pink-500/60 rounded-sm'>{goles.Equipo} {goles.Goles}</h1>
                      </div>
                    )
                  })
                }
                <h1 className='text-slate-300 mt-4'>Total: 15/65</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Jugador