import React, {useState} from 'react';
import './cells.css';
import store from './store';

function Cell({value}){

    const [val,setval] = useState("")
    const [clr,setclr] = useState(1)

    const handleclick = () =>{
        if(value==="💣"){
            setval(value)
            setclr(1)
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
            <button onClick={()=>handleclick()} className='cell_button'><div id="cell" style={{opacity:clr}}>{val}</div></button>
        </div>
    )
}

export default Cell;