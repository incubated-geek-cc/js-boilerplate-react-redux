import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    modal: modalReducer
  }
});

export default store;