import React, { useState } from 'react';
import './popapAdd.Module.scss'
import { newChat, setOpen } from '../../../redux/slices/navigationSlice'
import { useDispatch, useSelector } from 'react-redux'
const PopapAdd = () => {
	const dispatch = useDispatch()
	const [inputValue, setInputValue] = useState('')
	const open = useSelector(state => state.navigation.open)
	function add(){
		if(inputValue.length > 1){
			dispatch(newChat(inputValue))
			setInputValue('')
			dispatch(setOpen())
		}
	}
	return (
		<div className={`popap-add ${open ? 'popap-add-open' : ''}`}>
			<button onClick={() => dispatch(setOpen())} className='popap-add__button'>
				<img width={15} height={15} src='./img/close-popap.svg' alt='close' />
			</button>
			<h3 className='popap-add__title'>Створити новий чат</h3>
			<input
				value={inputValue}
				onChange={event => setInputValue(event.target.value)}
				className='popap-add__input'
				type='text'
				placeholder='Введіть назву'
			/>
			<button onClick={() => add()} className='popap-add__btn'>
				Створити
			</button>
		</div>
	)
};

export default PopapAdd;