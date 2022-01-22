import { useEffect, useState } from "react";
import "../styles/Preguntas.css";
import axios from "axios";

const Preguntas = () => {
    const [preguntas, setPreguntas] = useState([]);
    const [dataDel, setDataDel] = useState(false);
    const [dataSend, setDataSend] = useState({
        materia: "",
        dificultad: "",
        pregunta: "",
        respuesta: "",
    });
    const [newpre, setNewpre] = useState("d");
    const [disabled, setDisabled] = useState(false);
    const [modify, setModify] = useState(false);
    const handleDis = (dis) => {
        if (dis.materia) {
            if (dis.dificultad) {
                if (dis.pregunta) {
                    if (dis.respuesta) {
                        setDisabled(true);
                    } else {
                        setDisabled(false);
                    }
                }
            }
        }
    };

    const handleClick = () => {
        if (newpre === "d") {
            setNewpre("a");
        } else {
            setNewpre("d");
        }
    };

    const handleSubmit = (e) => {
        console.log(dataSend);
        axios.post("http://localhost:5000/newpre", dataSend).then((res) => {
            console.log(res.data);
        });
    };

    const handleChange = (e) => {
        setDataSend({
            ...dataSend,
            [e.target.name]: e.target.value,
        });
    };

    const del = (id) => {
        axios
            .delete("http://localhost:5000/deletepre/" + id)
            .then((res) => {
                console.log("Student successfully deleted!");
                setDataDel(true);
                setDataDel(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateForm = (e) => {
        if (!modify) {
            setModify(true);
            handleClick();
        }
        setDataSend({ ...dataSend, ...e });
    };

    const update = (data) => {
        axios
        .put("http://localhost:5000/updatepre/"+data._id,data)
        .then(result=>result.data)
        .catch((error)=>{console.log(error)})
    };

    const cancel = (e) => {e.prevenDefault()};
    useEffect(() => {
        axios
            .get("http://localhost:5000/")
            .then((res) => setPreguntas(res.data))
            .catch((error) => console.log(error));
        handleDis(dataSend);
    }, [dataSend, dataDel]);

    return (
        <div className="api-pre">
            <nav className="nav-preguntas">
                <h1>RETO+300</h1>
                <ul>
                    <li>
                        {!modify ? (
                            <button onClick={handleClick}>
                                Nueva pregunta
                            </button>
                        ) : (
                            <button>Modificar pregunta</button>
                        )}
                    </li>
                </ul>
            </nav>
            <Newpre
                newpre={newpre}
                disabled={disabled}
                dataSend={dataSend}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                modify={modify}
                update={update}
                cancel={cancel}
            />
            {preguntas.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                preguntas.map((res, index) => (
                    <PresSend
                        obj={res}
                        key={index}
                        del={del}
                        updateForm={updateForm}
                    />
                ))
            )}
        </div>
    );
};

function PresSend({ obj, del, updateForm }) {
    const e = obj;
    const { _id, materia, dificultad, pregunta, respuesta } = e;

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
        <div className={"preguntaDB " + dificultad + " " + materia}>
            <h1>Esta es la pregunta: {_id} </h1>
            <h2>Materia: {materia}</h2>
            <i className={mate(materia)}></i>
            <h2>Dificultad: {dificultad}</h2>
            <h2>Pregunta: {pregunta}</h2>
            <h2>Respuesta: {respuesta}</h2>
            <button onClick={() => del(_id)}>Eliminar</button>
            <button onClick={() => updateForm(e)}>
                Editar
            </button>
        </div>
    );
}

function Newpre({
    newpre,
    disabled,
    dataSend,
    handleSubmit,
    handleChange,
    modify,
    update,
    cancel,
}) {
    return (
        <form className={`newpre${newpre}`} onSubmit={handleSubmit}>
            <div className="newmateria">
                <label htmlFor="materia">Materia: </label>
                <select
                    name="materia"
                    id="materia"
                    onChange={handleChange}
                    value={dataSend.materia}
                >
                    <option value="">---</option>
                    <option value="matematica">Matemática</option>
                    <option value="geometria">Geometría</option>
                    <option value="estadistica">Estadistica</option>
                </select>
            </div>
            <div className="newdificultad">
                <label htmlFor="dificultad">Dificultad: </label>
                <select
                    name="dificultad"
                    id=""
                    onChange={handleChange}
                    value={dataSend.dificultad}
                >
                    <option value="">---</option>
                    <option value="dificil">Dificil</option>
                    <option value="moderado">Moderado</option>
                    <option value="facil">Fácil</option>
                </select>
            </div>
            <h4 className="newprea__h4">Escribe tu pregunta:</h4>
            <textarea
                name="pregunta"
                rows="5"
                className="newpregunta"
                placeholder="Escribe aquí tu pregunta"
                onChange={handleChange}
                value={dataSend.pregunta}
            ></textarea>
            <h4 className="newprea__h4">Escribe tu respuesta:</h4>
            <input
                type="text"
                name="respuesta"
                id="Respuesta"
                className="newrespuesta"
                onChange={handleChange}
                value={dataSend.respuesta}
            />
            <div className="form__submit">
                {modify && disabled? (
                    <>
                        <button className="button-5" onClick={()=>{update(dataSend)}}>
                            Modificar
                        </button>
                        <button className="button-4" onClick={cancel}>
                            Cancelar
                        </button>
                    </>
                ) : disabled ? (
                    <button className="button-5" type="submit">
                        Enviar
                    </button>
                ) : (
                    <>
                    <button className="button-5-dis" type="submit" disabled>
                        Te faltan datos!
                    </button>
                    <button className="button-4" onClick={()=> cancel}>
                    Cancelar
                </button>
                </>
                )}
            </div>
        </form>
    );
}

export default Preguntas;
