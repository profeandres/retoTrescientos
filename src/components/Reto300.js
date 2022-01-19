import React from 'react';
import preguntas from '../db/preguntas';
import '../styles/reto300.css'

const Reto300 = () => {
    const querystring = window.location.search;
    const params = new URLSearchParams(querystring);
    const materia = params.get('materia');
    const dificultad = params.get('dificultad');


    
    const filter = preguntas.filter(preguntas => preguntas.materia===materia && preguntas.dificultad===dificultad).map((pregunta, id)=>{
        id= pregunta.id;
        return(
            <div className='pregunta'>
                <h1>Pregunta: {id}</h1>
                <h1>La materia es: {pregunta.materia}</h1>
                <h1>La dificultad es: {pregunta.dificultad}</h1>
                <h1>La pregunta es: {pregunta.pregunta}</h1>
            </div>
        )
    });
    return (
        <div className="preguntas">
            {filter}
        </div>
    )
}

export default Reto300
