

// import { initialState } from "./initialState";
import {createSlice } from "@reduxjs/toolkit";
// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './types';



// export const contactReducer = createReducer(initialState, builder =>
//   builder
//     .addCase(ADD_CONTACT, (state, action) => {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     })
//     .addCase(DELETE_CONTACT, (state, action) => {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     })
//     .addCase(FILTER_CONTACT, (state, action) => {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     })
// );



export const contactSlise = createSlice({
  name: 'contact',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {

    ADD_CONTACT(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }
    },
    DELETE_CONTACT(state, action) {
      return {
       
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload),
        }
      }
    
  }
});






export const contactReduce = contactSlise.reducer;
export const { ADD_CONTACT, DELETE_CONTACT } = contactSlise.actions;




export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },

  reducers: {
    FILTER_CONTACT(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
})

export const filterReduce = filterSlice.reducer;
export const { FILTER_CONTACT } = filterSlice.actions;









// export const contactReducer = (state =initialState, action) => {

    
//     switch (action.type) {
//       case ADD_CONTACT:
//         return {
//           ...state,
//           contacts: [...state.contacts, action.payload],
//         };
//       case DELETE_CONTACT:
//         return {
//           ...state,
//           contacts: state.contacts.filter(
//             contact => contact.id !== action.payload
//           ),
//         };
//       case FILTER_CONTACT:
//        return {
//           ...state,
//           filter: action.payload,
//        };
//       default:
//         return state;
//     };

// };


