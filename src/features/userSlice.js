import { createSlice } from "@reduxjs/toolkit";

const initialState = {name:"", photo:"", email:""}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
      setUserLoginDetails: (state, action) => {
         state.name = action.payload.name;
         state.email = action.payload.email;
         state.photo = action.payload.photo;
       },
   
       setSignOutState: (state) => {
         state.name = null;
         state.email = null;
         state.photo = null;
       },
}
});
 export const {setUserLoginDetails, setSignOutState} = userSlice.actions;

 export const selecteduserName = (state)=> state.user.name;
 export const selecteduserPhoto = (state)=> state.user.photo;
 export const selecteduserEmail = (state)=> state.user.email;

 export default userSlice.reducer;
