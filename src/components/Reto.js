import React from 'react'
import '../styles/reto.css'
import { useState, useEffect} from 'react';

const Reto = () => {

    const [form,setForm] = useState({});;    
    const [mate,setMate] = useState('');
    const [geo,setGeo] = useState('');
    const [esta,setEsta] = useState('');
    const [disabled,setDisabled] = useState(false);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };
    
    const handleActive = (act)=>{
        switch (act) {
            case 'matemática':
                setMate('activa');
                setGeo('');
                setEsta('');
                break;

            case 'geometría':
                setMate('');
                setGeo('activa');
                setEsta('');
                break;
            
            case 'estadística':
                setMate('');
                setGeo('');
                setEsta('activa');
                break;
            default: 
                break
        }
    }

    const handleDis = (dis) =>{
        if (dis.materia){
            if(dis.nombre && (dis.nombre !== '')){
                if(dis.apellido && (dis.apellido !=='')){
                    if (dis.materia){
                        if(dis.dificultad && (dis.dificultad !== '')){
                            setDisabled(true);
                        }else{
                            setDisabled(false)
                        }
                    }
                }
            }
        }
    }

    useEffect( ()=>{
        const act = form.materia;
        handleActive(act);
        handleDis(form);
    }, [form]);

    return (
        <div className='reto'>
            <h1 className="reto__saludo">RETO+300</h1>
            <p className="reto__p">Para comenzar llena tus datos personales y selecciona la materia en la que te gustaría practicar.</p>
            <div className="reto__form">
                <form className='reto__form-form' action='/reto300'>
                    
                    <div id='input__nombre'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id='nombre' name='nombre' value={form.nombre} onChange={handleChange}/>
                    </div>
                    
                    <div id="input__apellido">
                        <label className='label__apellido'htmlFor="apellido"> Apellido: </label>
                        <input type="text" id='apellido' name='apellido' value={form.apellido} onChange={handleChange}/>
                    </div>
                           
                    <p> Elige una materia </p>
                    
                    <div className={`materia-${mate}`}>
                        <input type="radio" id='matemática' name='materia' value="matemática" onChange={handleChange}/>
                        <label htmlFor="matemática">Matemática</label>
                    </div>
                    
                    <div className={`materia-${geo}`}>
                        <input type="radio" id='geometría' name='materia' value="geometría" onChange={handleChange} />
                        <label htmlFor="geometría">Geometría</label>
                    </div>
                    
                    <div className={`materia-${esta}`}>
                        <input type="radio" id='estadística' name='materia' value="estadística" onChange={handleChange} />
                        <label htmlFor="estadística">Estadística</label>
                    </div>
                    

                    <p> Elige la dificultad </p>

                    <select name="dificultad" id="dificultad" onChange={handleChange}>
                        <option value="">---</option>
                        <option value={1}> Fácil </option>
                        <option value={2}> Moderado </option>
                        <option value={3}>Dificil</option>
                    </select>

                    <div className='form__submit'>
                        {disabled ? 
                        <button className="button-5"type='submit'>Empezar</button> :
                        <button className="button-5-dis"type="submit" disabled>Te faltan datos!</button> }
                    </div>
                
                </form>
            </div>
            <br />

            <div> </div>
        </div>
    )
}

export default Reto
