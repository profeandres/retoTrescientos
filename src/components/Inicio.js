import React from 'react'
import '../styles/inicio.css';
const Inicio = () => {
    return (
        <div className='inicio'>
            <div className='saludo'>
                <div className='saludo__div'>
                    <h1 className='saludo__div-h1-1'>BIENVENIDO </h1> <h1 className='saludo__div-h1-2'>RETO+300</h1>
                    <p className='saludo__div-p'>Te damos la bienvenida a este nuevo y ambicioso proyecto llamado RETO+300 por medio del cuál se espera que los resultados icfes del año 2022 sean mayores a 300 en promedio o para cada uno de los estudiantes. Te invitamos a quedarte y descubrir en qué te puede servir dicha herramienta.</p>
                    <p className='saludo__div-p'> Para continuar hacer click <a href="/reto300">aquí</a> .</p>
                </div>
            </div>
        </div>
    )
}

export default Inicio
