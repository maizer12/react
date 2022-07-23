import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
	click:false
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
		}
	},
})
export const { setValue, setClick } = newMessangSlice.actions
export default newMessangSlice.reducer
