import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value : ['спільний', 'друзі', 'робота',],
	num : 0
}

export const navigatiovSlice = createSlice({
	name: 'navigatiov',
	initialState,
	reducers: {
		setNumberCheck: (state, action) => {
			state.num = action.payload
		},
	},
})
export const { setNumberCheck } = navigatiovSlice.actions
export default navigatiovSlice.reducer
