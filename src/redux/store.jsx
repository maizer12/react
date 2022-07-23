import { configureStore } from "@reduxjs/toolkit";
import newMessangReducer from "./slices/newMessangSlice"
import profile from "./slices/profileSlice"
import navigation from "./slices/navigationSlice"
export const store = configureStore({
	reducer: {
		newMessang: newMessangReducer,
		profile,
		navigation
	},
})