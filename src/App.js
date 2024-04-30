import {useState} from 'react';
import './App.css';
import store from './store';
import Cell from './Cell';
function App() {

  const l=[[3,5,2,"💣",1,8,"💣"],[3,5,2,"💣",1,8,"💣"]]
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
      <div className='score_parent'><h1 className='score_num'>{score}</h1><h1 className='score'>Score :</h1></div>
      
      <div className='cell_box'>
        <div>
          {l.map((e)=>{return <div className='rw'>{e.map((f)=>{return <div><Cell value={f}/></div>})}</div>})}
        </div>
      </div>

    </div>
  );
}

export default App;
