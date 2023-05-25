import React from 'react';
import '../Hojas-de-estilo/Input.css'
import { FiCheck } from "react-icons/fi";

function ComponenteInput({ name,  estado, attribute, handleChange, expresionRegular, leyendaerror }) {

    const onChange = (e) => {
        handleChange({...estado, campo: e.target.value});
    }

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				handleChange({...estado, valido: 'true'})
			} else {
				handleChange({...estado, valido: 'false'})
			}
		}
	}

	return(
		<div className='contenedor-input'>
            <label>{name} </label>
            <div className='grupo-input'>
                <input
                    id={attribute.id}
                    name={attribute.name}
                    value={estado.campo}
                    placeholder={attribute.placeholder}
                    type={attribute.type}
                    onChange={ onChange }
                    className='input'
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <FiCheck className='icono-validacion'/>
            </div>
            <div className='leyenda-error'> 
              {leyendaerror}
            </div>
		</div>
	)
};

export default ComponenteInput;