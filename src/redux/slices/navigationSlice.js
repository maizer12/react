import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value : ['спільний', 'друзі', 'робота',],
	num : 0,
	open : false
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
	},
})
export const { setNumberCheck, newChat, setOpen } = navigatiovSlice.actions
export default navigatiovSlice.reducer
