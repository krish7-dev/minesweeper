const reducer = (state = 0,action)=>{
    if(action.type == 'INCREMENT'){
        return state + action.payload;
    }
    if(action.type === 'blast'){
        return action.payload
    }
}

export default reducer;