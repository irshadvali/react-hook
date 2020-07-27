import React from 'react';
import { ContextConsumer } from '../context/context';
const Component2 = ({ text }) => {
	return (
		<div>
			<ContextConsumer>
				{(value) => {
					console.log(value);
					return (
						<div>
							<div>{value.text}</div>
                            <button onClick={()=>{
                               value.showAlert("Irshad Vali shaikh") 
                            }}>Click me</button>
						</div>
					);
				}}
				{/* <div>
					{text}
				</div> */}
			</ContextConsumer>
		</div>
	);
};

export default Component2;
