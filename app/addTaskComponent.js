'use client';
import styles from './page.module.css';
import { useReducer, useState } from "react";
export default function AddTask({addnewTask})
{
    const [text,setText]=useState('');
    return (

    <div className={styles.customcard}>
        <input 
        type='text' 
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>
            {
                setText('');
                addnewTask(text);
            }
            }>Add</button>
    </div>

    );
    
    


}