import {useState} from 'react';
import './App.css';
import store from './store';
import Cell from './Cell';
function App() {

  const l=[[3,5,2,"💣",1,8,"💣"],[1,"💣",4,2,7,"💣",8],[3,5,2,"💣",1,8,"💣"],[3,5,2,"💣",1,8,"💣"],[1,"💣",4,2,7,"💣",8],[3,5,2,"💣",1,8,"💣"]]
  const [score,setscr]=useState(0);
  
  store.subscribe(ren)
  function ren(){
    const state = store.getState()
    console.log(state)
    const newv = state
    setscr(newv)
  }

  return (
    <div>
      <div className='title'>Minecraft</div>
      <div className='cell_box'>
      <div className='score_parent'><h1 className='score'>Score : <span>{score}</span></h1><button className='reset'>⟳</button></div>
        <div className='rw_parent'>
          {l.map((e)=>{return <div className='rw'>{e.map((f)=>{return <div><Cell value={f}/></div>})}</div>})}
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
