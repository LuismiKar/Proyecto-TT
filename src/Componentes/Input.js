import React from 'react';
import '../Hojas-de-estilo/Input.css'

function Input({ attribute, handleChange }) {


	return(
		<div className='contenedor-input'>
			<input
				id={attribute.id}
				name={attribute.name}
				value={attribute.value}
				placeholder={attribute.placeholder}
				type={attribute.type}
				onChange={ (e) => handleChange(e.target.name, e.target.value) }
				className='input'

			/>
		</div>
	)
};

export default Input;