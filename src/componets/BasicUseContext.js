import React, { useState } from 'react';
import Component1 from './Component1';
import { ContextProvider } from '../context/context';
function BasicUseContext() {

  const showAlert=(text)=>{
        alert(`hi ${text}`)
    }
	return (
		<ContextProvider value={{ text: 'vali irshad',showAlert }}>
			<div>
				<Component1 />
			</div>
		</ContextProvider>
	);
}

export default BasicUseContext;
