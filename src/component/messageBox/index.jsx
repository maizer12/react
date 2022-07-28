import React, { useEffect, useMemo, useState } from 'react'
import './messageBox.Module.scss'
import { useSelector } from 'react-redux'
import chat from '../../json/messenger.json'

const MessageBox = () => {
	const outChat = useSelector(state => state.newMessang.out)
	const value = useSelector(state => state.newMessang.value)
	const click = useSelector(state => state.newMessang.click)
	const login = useSelector(state => state.profile.login)
	const num = useSelector(state => state.navigation.num)
	const userMessag = chat.box.filter(e => e.id === String(num))
	const [chekedMesseng, setChekedMesseng] = React.useState(false)
	const chatNum = useSelector(state => state.navigation.num)
	const date = new Date()
	let output =
		String(date.getDate()).padStart(2, '0') +
		'.' +
		String(date.getMonth() + 1).padStart(2, '0') +
		'.' +
		date.getFullYear()
	useMemo(() => {
		userMessag.length >= 1 ? setChekedMesseng(true) : setChekedMesseng(false)
	}, [num])
	useMemo(() => {
		const object = { id: String(num), name: login, text: value, date: output }
		if (value.length > 0) {
			userMessag.push(Object.create({ name: login, text: value, date: output }))
			chat.box.push(object)
		}
		setChekedMesseng(true)
	}, [click])
	return (
		<div className='message-box'>
			{outChat[chatNum] ? (
				<div className='message-box__out'>Ви покинули чат!</div>
			) : (
				<ul className='message-box__items'>
					{chekedMesseng ? (
						userMessag.map((e, i) => (
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
									<p className='item-message__message'>{e.text}</p>
								</div>
							</li>
						))
					) : (
						<li className='message-box__item-none'>
							<h1 className='message-box__none'>Повідомлень не має</h1>
							<img
								width={300}
								height={300}
								src='./img/none.png'
								alt='none-messenge'
							/>
						</li>
					)}
				</ul>
			)}
		</div>
	)
}

export default MessageBox
