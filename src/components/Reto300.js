import React from 'react';
import preguntas from '../db/preguntas';

const Reto300 = () => {
    const querystring = window.location.search;
    const params = new URLSearchParams(querystring);
    params.get('materia');

    return (
        <div>
            <h1>La materia es: {params.get('materia')}</h1>
            <h1>La materia es: {preguntas[0].materia}</h1>
            <br />
            {params.get('materia') === preguntas[0].materia ? 
            <h1>Ambas materias coinciden</h1>: <h1>Las materias no coinciden</h1>}
        </div>
    )
}

export default Reto300
