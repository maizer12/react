import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value : ['спільний', 'друзі', 'робота',],
	num : 0,
	open : false,
	pages : 0
}

export const navigatiovSlice = createSlice({
	name: 'navigatiov',
	initialState,
	reducers: {
		setNumberCheck: (state, action) => {
			state.num = action.payload
		},
		newChat: (state, action) => {
			state.value.push(action.payload)
		},
		setOpen: (state, action) => {
			state.open = !state.open
		},
		setPages: (state, action) => {
			state.pages = action.payload
		},
	},
})
export const { setNumberCheck, newChat, setOpen, setPages } = navigatiovSlice.actions
export default navigatiovSlice.reducer
