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
          state.users = state.users.filter((user)=>user.id !== action.payload)
        },

        editUser:(state,action) => {
          const {name, email, gen} = action.payload
         const updatedUser = state.users.find((user)=> user.id === action.payload.id )
         if(updatedUser){
          updatedUser.name = name
          updatedUser.email = email
          updatedUser.gen = gen
         }
        }
    }
})

export const {addUser, deleteUser, editUser} = userSlice.actions;
export default userSlice.reducer;