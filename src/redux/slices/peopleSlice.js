import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
	num: 0
}
export const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload
		},setNum:(state, action)=>{
			state.num = action.payload
		}

	},
})
export const { setValue, setNum } = peopleSlice.actions
export default peopleSlice.reducer
