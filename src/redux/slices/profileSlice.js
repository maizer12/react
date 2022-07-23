import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: 'Іван',
	login: 'MaizerFX',
	mail: 'danua456@mail.ua',
	telegram: 'danyadtreles',
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		
	},
})
export const {  } = profileSlice.actions
export default profileSlice.reducer
