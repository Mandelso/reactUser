//const { createSlice } = require("@reduxjs/toolkit");
import  { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        {
            name: "Ahmed Zaky",
            email: "ahmedzaky@gmail.com",
            gen: 13,
            id: "0987656jkgjvjh"
          },
          {
            name: "Ali Abdul Basit",
            email: "aliabdulbasut@gmail.com",
            gen: 24,
            id: "kdio3554739s"
          },
          {
            name: "Abla Shika",
            email: "ablashika@gmail.ccom",
            gen: 10,
            id: "78474fdrs5773"
          },
    ]
}

const userSlice = createSlice ({
    name: "users",
    initialState,
    reducers:{
        addUser:(state,action) => {
            state.users=[...state.users,action.payload]
        },
        deleteUser:(state,action)=> {
          state.users = state.users.filter((user)=>{
            if(user.id !== action.payload)
            return user
          })
        },

        editUser:(state,action) => {
         state.users = state.users.map((user)=> {
          console.log();
          if (user.id === action.payload.id)
          return action.payload.newUser;
          return user;
          })
        }
    }
})

export const {addUser, deleteUser, editUser} = userSlice.actions;
export default userSlice.reducer;