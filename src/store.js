import {createStore} from 'redux';
import reducer from './red_index';
console.log("store")
const store = createStore(reducer);

export default store;