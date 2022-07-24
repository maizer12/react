import { configureStore } from "@reduxjs/toolkit";
import newMessangReducer from "./slices/newMessangSlice"
import profile from "./slices/profileSlice"
import navigation from "./slices/navigationSlice"
import dopSetting from "./slices/dopSettingSlice";
export const store = configureStore({
	reducer: {
		newMessang: newMessangReducer,
		profile,
		navigation,
		dopSetting
	},
})