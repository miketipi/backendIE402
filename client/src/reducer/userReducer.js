import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    userId: "",
    userName : "",
    isLoad : false,
    admin : false,
}
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action)=>{
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.admin = action.payload.admin;
            state.isLoad = true;
        },
        loadUser: async (state,action) =>{
            await axios.get(`/userControl/users/${state.userId}`,{
            })
            .then(res=>{
                if(res.status===200){
                    state.userId = res.data.userId;
                    state.username = res.data.username;
                    state.admin = res.data.admin;
                    state.isLoad = true;
                }
            })
            .catch(e=>{
                state.isLoad = false;
                state.userId = "";
            });
        }
    }
});

export const {setUser,loadUser} = userReducer.actions;
export default userReducer.reducer;