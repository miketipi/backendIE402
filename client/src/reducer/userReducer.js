import { CleaningServices } from "@mui/icons-material";
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
            console.log(action.payload)
            state.userId = action.payload._id;
            state.userName = action.payload.name;
            state.admin = action.payload.admin;
            state.isLoad = true;
        },
        loadUser: async (state,action) =>{
            await axios.get(`/userControl/users/${state.userId}`,{
            })
            .then(res=>{
                if(res.status===200){
                    state.userId = res.data._id;
                    state.userName = res.data.name;
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

export const {setUser, loadUser} = userReducer.actions;
export default userReducer.reducer;