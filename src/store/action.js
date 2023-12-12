



// const addTask = {
//   type: 'tasks/addTask',
//   payload: {
//     id: 'Generated id',
//     text: 'User entered text',
//     completed: false,
//   },
// };

import { DELETE_CONTACT } from "./types";
import { ADD_CONTACT } from "./types";



// export const addContactAction = (contact) => {
//      return {
//        type: ADD_CONTACT,
//        payload: contact,
//      };
    
// };

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const delateContactAction = (id) => {
    return {
      type: DELETE_CONTACT,
      payload: 'id',
    };
};

