import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNumberCheck } from '../../redux/slices/navigationSlice'
import './chat.Module.scss'
const Chat = () => {
	const chatItem = useSelector(state => state.navigation.value)
	const chatNum = useSelector(state => state.navigation.num)
	const dispatch = useDispatch()
	return (
		<div className='chat'>
			<div className='chat-hade'>
				<h5 className='chat-hade__name'>Чати</h5>
				<p className='chat-hade__num'>{chatItem.length}</p>
			</div>
			<ul className='chat-items'>
				{chatItem.map((e, i) => (
					<li
						onClick={() => dispatch(setNumberCheck(i))}
						key={i}
						className={`chat-items__item ${
							chatNum === i ? 'chat-items__item-active' : ''
						} `}
					>
						# {e}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Chat
