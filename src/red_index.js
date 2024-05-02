const reducer = (state=0,action)=>{
    console.log("reducer")
    if(action.type === 'INCREMENT'){
     //   console.log("incre",state+action.payload)
        return state + action.payload;
    }
    if(action.type === 'blast'){
      //  console.log("blast",state+action.payload)

        return action.payload
    }
}

export default reducer;