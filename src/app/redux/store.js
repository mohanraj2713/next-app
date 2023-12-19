import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slice/UserSlice"
import { composeWithDevTools } from "redux-devtools-extension";
const store = configureStore({
    reducer: {
        userInfo: userReducer
    },

}, composeWithDevTools())

export default store;