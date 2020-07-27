import React, { useState } from 'react';


function CustomForm() {
    const [email, setEmial] = useState("");
    const [password, setPassword] = useState("");
    const [showForm, toggleForm] = useState(true);
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log({email:email,
        password:password})
    };
	return (
		<div>
            <button onClick={()=>{
                toggleForm(!showForm)
            }}>Toggel form</button>
		{showForm && (<form onSubmit={onSubmit}>
                <label>
                    <div> Email</div>
                    <input type="email" value={email} onChange={(event)=>{
                        setEmial(event.target.value)
                        //console.log(event.target.value)
                    }}/>
                </label>
                <label>
                    <div> Password</div>
                    <input type="Password" value={password} onChange={(event=>{
                         setPassword(event.target.value)
                    })}/>
                </label>
                <div> <button type="submit">SignIn</button></div>
            </form>)}	
		</div>
	);
}

export default CustomForm;
