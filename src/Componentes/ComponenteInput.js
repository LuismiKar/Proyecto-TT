import React from 'react';
import '../Hojas-de-estilo/Input.css'
import { FiCheck, FiX } from "react-icons/fi";
import { Label , GrupoInput, Input , LeyendaError, IconoValidacion} from '../Elementos/InicioSesionElementos';

function ComponenteInput({ name,  estado, attribute, handleChange, expresionRegular, leyendaerror , funcion }) {

    const onChange = (e) => {
        handleChange({...estado, campo: e.target.value});
    }

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				handleChange({...estado, valido: 'true'});
                console.log(estado.valido);
			} else {
				handleChange({...estado, valido: 'false'});
                console.log(estado.valido);
			}
		}
        if(funcion){
            funcion();
        }

	}

	return(
		<div className='contenedor-input'>
            <Label>{name} </Label>
            <GrupoInput>
                <Input
                    id={attribute.id }
                    name={attribute.name}
                    value={estado.campo}
                    placeholder={attribute.placeholder}
                    type={attribute.type}
                    onChange={ onChange }
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IconoValidacion 
                    icon={estado.valido === 'true' ? FiCheck : FiX} 
                    valido={estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}> 
              {leyendaerror}
            </LeyendaError>
		</div>
	)
};

export default ComponenteInput;