

import { DELETE_CONTACT } from "./types";
import { ADD_CONTACT } from "./types";
import { FILTER_CONTACT } from "./types";



export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContactAction = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filterAction = (contact) => {
    return {
        type: FILTER_CONTACT,
        payload: contact,
    };
}