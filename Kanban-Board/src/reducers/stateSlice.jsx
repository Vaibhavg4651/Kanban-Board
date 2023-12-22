import { createSlice } from "@reduxjs/toolkit";
const stateSlice = createSlice({
    name: 'states',
    initialState: {
        isloggedin:false,
        userdata:null,
    },
    reducers: {
     
      setdata(state,action){
        state.userdata=action.payload
      },
     
      setisLoggedin(state,action){
        state.isloggedin=action.payload
      },
    },
  })


  export default stateSlice.reducer
  export const {setdata,setisLoggedin}=userSlice.actions