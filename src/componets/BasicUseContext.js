import React, { useContext } from 'react';
import notificationContext from './../context/NotificationContext';

function BasicUseContext() {
	const { showAlert } = useContext(notificationContext);
	return (
		<div>
			<button
				onClick={() => {
					showAlert('Now showing Alert');
				}}
			>
				Show Alert
			</button>
		</div>
	);
}

export default BasicUseContext;
