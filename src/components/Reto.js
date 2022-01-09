import React from 'react'
import '../styles/reto.css'
import { useState, useEffect} from 'react';

const Reto = () => {

    const [form,setForm] = useState({});;    
    const [mate,setMate] = useState('');
    const [geo,setGeo] = useState('');
    const [esta,setEsta] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        });
    };
    
    const handleActive = (act)=>{
        switch (act) {
            case 'matematica':
                setMate('activa');
                setGeo('');
                setEsta('');
                break;

            case 'geometria':
                setMate('');
                setGeo('activa');
                setEsta('');
                break;
            
            case 'estadistica':
                setMate('');
                setGeo('');
                setEsta('activa');
                break;
            default: 
                break
        }
    }

    useEffect( ()=>{
        const act = form.materia;
        handleActive(act);
    }, [form]);

    return (
        <div className='reto'>
            <h1 className="reto__saludo">RETO+300</h1>
            <p className="reto__p">Para comenzar llena tus datos personales y selecciona la materia en la que te gustaría practicar.</p>
            <div className="reto__form">
                <form className='reto__form-form'>
                    
                    <div id='input__nombre'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id='nombre' name='nombre' value={form.nombre} onChange={handleChange}/>
                    </div>
                    
                    <div id="input__apellido">
                        <label htmlFor="apellido"> Apellido: </label>
                        <input type="text" id='apellido' name='apellido' value={form.apellido} onChange={handleChange}/>
                    </div>
                           
                    <p> Elige una materia </p>
                    
                    <div className={`materia-${mate}`}>
                        <input type="radio" id='matematica' name='materia' value="matematica" onChange={handleChange}/>
                        <label htmlFor="matematica">Matemática</label>
                    </div>
                    
                    <div className={`materia-${geo}`}>
                        <input type="radio" id='geometria' name='materia' value="geometria" onChange={handleChange} />
                        <label htmlFor="geometria">Geometría</label>
                    </div>
                    
                    <div className={`materia-${esta}`}>
                        <input type="radio" id='estadistica' name='materia' value="estadistica" onChange={handleChange} />
                        <label htmlFor="estadistica">Estadística</label>
                    </div>
                    

                    <p> Elige la dificultad </p>

                    <select name="dificultad" id="dificultad" onChange={handleChange}>
                        <option value="">---</option>
                        <option value="facil"> Fácil </option>
                        <option value="moderado"> Moderado </option>
                        <option value="dificil">Dificil</option>
                    </select>
                    <input type="submit" value="Enviar" id='form-submit' />
                </form>
            </div>
            <br />

            <div> </div>
        </div>
    )
}

export default Reto
