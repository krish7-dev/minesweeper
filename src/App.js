import {useState} from 'react';
import './App.css';
import store from './store';
import Cell from './Cell';

let fc = NaN;
let result = new Array(7)
result.fill(0)
let l = []
for (let c = 0;c<7;c++){
  result = result.map(()=>Math.floor(Math.random()*11)+1)
  l.push(result)
}
for (let c=0;c<7;c++){
  let rw=Math.floor(Math.random()*3+1)
  while(rw>0){
    l[c][Math.floor(Math.random()*7)]="💣"
    rw--
  }
}
console.log(l)
store.subscribe(()=>fc())

function App() {
  //l=[[3,5,2,"💣",1,8,"💣"],[1,"💣",4,2,7,"💣",8],[3,5,2,"💣",1,8,"💣"],[3,5,2,"💣",1,8,"💣"],[1,"💣",4,2,7,"💣",8],[3,5,2,"💣",1,8,"💣"]]
  
  const [score,setscr]=useState(0);
  const [emoji,setemoji]=useState('😀');
  const [flag,setflag] = useState(1)
 
  fc = () =>{
    console.log("Boom")
    const state = store.getState()
    const newv = state
    if(newv<0){
      setemoji('☹️')
      setflag(0)
    }
    if(flag && newv>0){
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
  }

  function rst(){

    window.location.reload()
    
  }

  return (
    <div>
      <div className='title'>Minesweeper</div>
      <div className='cell_box'>
      <div className='score_parent'><h1 className='score'>Score : <span>{score}</span></h1><div className='emoji'>{emoji}</div><button className='reset' onClick={()=>rst()}>⟳</button></div>
        <div className='rw_parent'>
          {l.map((e)=>{return <div className='rw'>{e.map((f)=>{return <div><Cell value={f} style={{backgroundColor:'clr'}}/></div>})}</div>})}
        </div>
      </div>
      
    </div>
  );
}

export default App;
