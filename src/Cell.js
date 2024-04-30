import React, {useState} from 'react';
import './cells.css';
import store from './store';

function Cell({value}){

    const [val,setval] = useState("")
    const [clr,setclr] = useState("black")

    const handleclick = () =>{
        if(value==="💣"){
            setval(value)
            setclr("white")
            store.dispatch({
                type:'blast',
                payload:'😟'
            })
        }
        else{
            setval(value)
            setclr("white")
        }

        store.dispatch({
            type:'INCREMENT',
            payload:value
        })
    }

    return(
        <div>
            <button onClick={()=>handleclick()}><div id="cell" style={{backgroundColor:clr}}>{val}</div></button>
        </div>
    )
}

export default Cell;