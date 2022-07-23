import React, { useEffect, useMemo, useState } from 'react'
import './messageBox.Module.scss'
import { useSelector } from 'react-redux'


const MessageBox = () => {
	const value = useSelector(state => state.newMessang.value)
	const click = useSelector(state => state.newMessang.click)
	const login = useSelector(state => state.profile.login)
	const [userMessag, setUserMessag] = useState([
		{
			name: 'Іван',
			text: 'Тут буде текст',
			date: '17.07.2022',
		},
		{
			name: 'Петя',
			text: 'я тут пишу ',
			date: '18.07.2022',
		},
	])
	let date = new Date()
	let output =
		String(date.getDate()).padStart(2, '0') +
		'.' +
		String(date.getMonth() + 1).padStart(2, '0') +
		'.' +
		date.getFullYear()
	useMemo(() => {
		if(value.length > 0){ userMessag.push(Object.create({ name: login, text: value, date: output }))}
	}, [click])
	return (
		<div className='message-box'>
			<ul className='message-box__items'>
				{userMessag.map((e, i) => (
					<li key={i} className='message-box__item item-message'>
						<img
							width={40}
							height={40}
							className='item-message__photo'
							src='./img/user/1.jpg'
							alt='user'
						/>
						<div className='item-message__text'>
							<ul className='item-message__name-data'>
								<li className='item-message__name'>{e.name}</li>
								<li className='item-message__data'>{e.date}</li>
							</ul>
							<p className='item-message__message'>
								{e.text}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MessageBox
