import {useState} from 'react';
import './App.css';
import store from './store';
import Cell from './Cell';
//store.subscribe(ren)
store.subscribe(()=>{console.log("outside")})
function App() {
  const l=[[3,5,2,"💣",1,8,"💣"],[1,"💣",4,2,7,"💣",8],[3,5,2,"💣",1,8,"💣"],[3,5,2,"💣",1,8,"💣"],[1,"💣",4,2,7,"💣",8],[3,5,2,"💣",1,8,"💣"]]
  const [score,setscr]=useState(0);
  const [emoji,setemoji]=useState('😀');
  const [flag,setflag] = useState(1)
 
  store.subscribe(()=>{console.log("inside")})
    
  
  

  return (
    <div>
      <div className='title'>Minesweeper</div>
      <div className='cell_box'>
      <div className='score_parent'><h1 className='score'>Score : <span>{score}</span></h1><div className='emoji'>{emoji}</div><button className='reset' onClick={()=>console.log("Clicked")}>⟳</button></div>
        <div className='rw_parent'>
          {l.map((e)=>{return <div className='rw'>{e.map((f)=>{return <div><Cell value={f} style={{backgroundColor:'clr'}}/></div>})}</div>})}
        </div>
        <button onClick={()=>console.log(flag)}>reset</button>
      </div>
      
    </div>
  );
}

export default App;
/*

function ren(){
  const state = store.getState()
  const newv = state
  console.log("state :",state)
  if(newv === -1){
    setemoji('☹️')
    setflag(0)
    console.log("flag")
  }
  if(flag){
    console.log("inside and value of emoji :",flag)
    setscr(newv)
    if(newv>49){
      setemoji('🔥')
    }
    else if(newv>39){
      setemoji('😎')
    }
    else if(newv>29){
      setemoji('🤠')
    }
    else if(newv>19){
      setemoji('🤩')
    }
    else if(newv>10 && newv<20){
      setemoji('😁')
    }
    }
  }*/