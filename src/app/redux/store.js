import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slice/UserSlice"

const store = configureStore({
    reducer:{
        userInfo:userReducer
    },
})

export default store;