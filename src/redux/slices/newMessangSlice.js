import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
	click:false,
	out:[false, false, false,]
}

export const newMessangSlice = createSlice({
	name: 'newMessang',
	initialState,
	reducers: {
		setValue: (state, action) =>{
			state.value = action.payload
		},
		setClick: (state, action) =>{
			state.click = action.payload
		}, setOut: (state, action) =>{
			state.out = action.payload
		}
	},
})
export const { setValue, setClick, setOut } = newMessangSlice.actions
export default newMessangSlice.reducer
