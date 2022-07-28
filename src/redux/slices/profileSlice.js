import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: 'Іван',
	login: 'MaizerFX',
	mail: 'danua456@mail.ua',
	telegram: 'danyadtreles',
	open: false
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setOpen:(state)=>{
			state.open = !state.open
		}
	},
})
export const { setOpen } = profileSlice.actions
export default profileSlice.reducer
