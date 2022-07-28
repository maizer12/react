import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../../../redux/slices/profileSlice.js'
import './popapSeting.Module.scss'
const PopapSetting = () => {
	const open = useSelector(state => state.profile.open)
	const dispatch = useDispatch()
	return (
		<section className={`popap-setting ${open ? 'popap-setting-active' : ''}`}>
			<h4 className='popap-setting__title'>Будь ласка введіть нові дані!</h4>
			<input
				className='popap-setting__input'
				placeholder='
				Поле для введення'
				type='text'
			/>
			<div className='popap-setting__buttons'>
				<button className='popap-setting__btn'>Зберегти</button>
				<button onClick={() => dispatch(setOpen())} className='popap-setting__btn'>
					Відмінити
				</button>
			</div>
		</section>
	)
}

export default PopapSetting
