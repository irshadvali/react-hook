import React, { useState } from 'react';

function FirstComonent() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<div>
				<p>{count}</p>
				<button
					onClick={() => {
						setCount(count + 1);
					}}
				>
					increment
				</button>

				<button
					onClick={() => {
						setCount(count - 1);
					}}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default FirstComonent;
