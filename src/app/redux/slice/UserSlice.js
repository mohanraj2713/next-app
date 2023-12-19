import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload.data]
        },
        removeUser: (state, action) => {
            const newSetofUser = state.users.filter((user) => user.name !== action.payload.name)
            state.user = newSetofUser
        },
        setUser: (state, action) => {
            state.users = [...action.payload.data]
        }
    }
})

export const { addUser, removeUser, setUser } = UserSlice.actions; 

export default UserSlice.reducer;