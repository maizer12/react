import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
	num: 0,
	add: [false, false]
}
export const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload
		},setNum:(state, action)=>{
			state.num = action.payload
		},
		setAdd:(state, action)=>{
			state.add = action.payload
		}

	},
})
export const { setValue, setNum, setAdd } = peopleSlice.actions
export default peopleSlice.reducer
