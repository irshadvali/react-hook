import React, { useState } from 'react';

import {NotificationProvider} from './NotificationContext';
import './style.css'
const Notification=({children})=> {
    const [showAlert, toggelAlert]= useState(false)
    const [textAlert, setTextAlert]= useState("")
    return <NotificationProvider
    value={{
        showAlert:(text)=>{
            setTextAlert(text)
            toggelAlert(true)
            setTimeout(()=>{
                toggelAlert(false)
                 setTextAlert("")
            
            },3000)
        }
    }}
    >
        {children}
{showAlert && <div class="alert">{textAlert}</div>}
    </NotificationProvider>
}

export default Notification;