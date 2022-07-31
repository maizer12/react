import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: 'Іван',
	login: 'MaizerFX',
	mail: 'danua456@mail.ua',
	telegram: 'danyadtreles',
	open: false,
	num: 0,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setOpen: state => {
			state.open = !state.open
		},
		setNum: (state, action) => {
			state.num = action.payload
		},
		setName: (state, action) => {
			state.name = action.payload
		},
		setLogin: (state, action) => {
			state.login = action.payload
		},
		setMail: (state, action) => {
			state.mail = action.payload
		},
	},
})
export const { setOpen, setNum, setLogin, setMail, setName } = profileSlice.actions
export default profileSlice.reducer
