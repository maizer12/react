import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: ['Покинути чат', 'Видалити историю', 'Змінити назву'],
	index: 55,
	click: false
}
export const dopSettingSlice = createSlice({
	name: 'dopSetting',
	initialState,
	reducers: {
		setIndex: (state, action) => {
			state.index = action.payload
		},
		setClick: (state, action) => {
			state.click = action.payload
		},
	},
})
export const { setIndex, setClick } = dopSettingSlice.actions
export default dopSettingSlice.reducer
