import { createSlice } from "@reduxjs/toolkit";
const stateSlice = createSlice({
    name: 'states',
    initialState: {
        group: "status",
        order: "status",
        theme: "light",
    },
    reducers: {
      setgroup(state,action){
        state.group=action.payload
      },
      setorder(state,action){
        state.order=action.payload
      },
      setTheme(state,action){
        state.theme=action.payload
      }
    },
  })


  export default stateSlice.reducer
  export const {setgroup,setorder,setTheme}=stateSlice.actions