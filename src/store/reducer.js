import { combineReducers } from "redux";
import { initialState } from "./initialState";
import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const contactReducer = (state =initialState, action) => {
//   if (action.type === ADD_CONTACT) {
//     return { ...state, contacts: action.payload };
//   }
//     if (action.type === DELETE_CONTACT) {
//         return { ...state, contacts: action.payload };
//     };
    
//     if (action.type === FILTER_CONTACT) {
//         return { ...state, contacts: action.payload };
//         }
    
    switch (action.type) {
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case DELETE_CONTACT:
        return {
          ...state.contacts,
          ...action.payload,
        };
      default:
        return state;
    };

};




export const reducer = combineReducers({
  contacts: contactReducer,
  //   user: userreducer,
});