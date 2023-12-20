import { configureStore } from '@reduxjs/toolkit';
import { contactReduce, filterReduce } from './reducer';
// import { contactSlise } from './reducer';


// export const store = createStore(contactReducer, enhancer);


export const store = configureStore({
  reducer: {
    contact: contactReduce,
    filter: filterReduce,
  },
});