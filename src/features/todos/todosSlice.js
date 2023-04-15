import { createSlice } from '@reduxjs/toolkit'; 
// To keep everything in a single place: reducers, actioncreators, state
// dispatch action --> change state of reducer

/*
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 
// To keep everything in a single place: reducers, actioncreators, state
// dispatch action --> change state of reducer
Redux Application:
- Actions
  - type
  - payload
- Store
- Reducers

const initialState = {
  remoteTodos: [],
  loading: false
}

const getRemoteTodos = createAsyncThunk(
  'todos/getRemoteTodos', //action type string
  async (thunkAPI) => { // callback function
    const res = await fetch('https://jsonplaceholder.typicode.com/posts').then( (data) => data.json() )
    return res
})

export const remoteTodoSlice = createSlice({
  name: 'remoteTodos',
  initialState,
  reducers: {},
  extraReducers: {},
})

export const remoteTodoReducer = remoteTodoSlice.reducer;
*/
const initialState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    editTodo: (state, action) => {
      state.todos.find(todo => {
        if (todo.id === action.payload.id) {
          todo.isEditing = true
        }
      })
    },
    resetEdit: state => {
      state.todos.forEach(todo => {
        todo.isEditing = false
      })
    },
    saveTodo: (_, action) => {
      console.log('save todo', action)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    deleteAllTodos: state => {
      state.todos = []
    }
  }
});

export const {
  addTodo,
  editTodo,
  saveTodo,
  resetEdit,
  deleteTodo,
  deleteAllTodos
} = todosSlice.actions;

export const selectTodos = state => state.todos;

export default todosSlice.reducer;
