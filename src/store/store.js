import { createStore } from 'redux';
import { initialState } from './initialState';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { contactReducer } from './reducer';
// import { combineReducers } from 'redux';



const enhancer = devToolsEnhancer();


const rootReducer = (state = initialState, action) => {  
 return state;
 
 };


export const store = createStore(rootReducer, enhancer);
//  console.log('store', store);

// export const reducer = combineReducers({
//   contacts: contactReducer,
//   //   user: userreducer,
// });

