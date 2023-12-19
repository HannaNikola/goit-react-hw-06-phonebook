
import { initialState } from "./initialState";
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './types';

export const contactReducer = (state =initialState, action) => {

    
    switch (action.type) {
      case ADD_CONTACT:
        return {
          contacts: [...state.contacts, action.payload],
        };
      case DELETE_CONTACT:
        return {
          
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      case FILTER_CONTACT:
       return {
          ...state,
          filter: action.payload,
       };
      default:
        return state;
    };

};


