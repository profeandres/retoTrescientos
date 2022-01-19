import { useEffect, useState } from "react";
import "../styles/Preguntas.css";
import axios from "axios";

const Preguntas = () => {
    const [preguntas, setPreguntas] = useState([]);
    const [filtro, setFiltro] = useState([]);

    const handleFilter = (e) => {
        const original = preguntas;
        setFiltro({
            ...filtro,
            [e.target.name]: e.target.value,
        });
        if (filtro) {
            filtracion(preguntas, filtro);
        } else {
            setPreguntas(original);
        }
    };

    function filtracion(e, f) {
        setPreguntas(e.filter((res) => res.dificultad === f.dificultad));
        console.log(preguntas);
    }

    useEffect(() => {
        axios
            .get("http://localhost:5000/")
            .then((res) => setPreguntas(res.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="api-pre">
            <nav className="nav-preguntas">
                <h1>RETO+300</h1>
                <ul>
                    <li><a href="/newpre">Crear Pregunta</a></li>
                </ul>
            </nav>
            
            {preguntas.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                preguntas.map((res) => <PresSend obj={res} key={res.id} />)
            )}
        </div>
    );
};

function PresSend(props) {
    const e = props.obj;
    const id = e.id,
        mat = e.materia,
        dif = e.dificultad,
        pre = e.pregunta,
        res = e.respuesta;

    function mate(e) {
        if (e === "estadistica") {
            return "fas fa-chart-pie";
        } else if (e === "matematica") {
            return "fas fa-square-root-alt";
        } else if (e === "geometria") {
            return "fas fa-drafting-compass";
        }
    }
    return (
        <div className={"preguntaDB " + dif + " " + mat}>
            <h1>Esta es la pregunta: {id} </h1>
            <h2>Materia: {mat}</h2>
            <i className={mate(mat)}></i>
            <h2>Dificultad: {dif}</h2>
            <h2>Pregunta: {pre}</h2>
            <h2>Respuesta: {res}</h2>
            <button>Eliminar</button>
            <button>Editar</button>
        </div>
    );
}

export default Preguntas;
