import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

function Input({ attribute, handleChange, param }) {
	return(
		<div>
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