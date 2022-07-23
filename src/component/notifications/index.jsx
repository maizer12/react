import React, { useState } from 'react';
import './notifications.Module.scss'
const Notifications = () => {
	const [openList, setOpenList] = useState(false)
	const [chekedNow, setChekedNow] = useState(true)
	function activeList (){
		setOpenList(!openList)
		setChekedNow(false)
	}
	return (
		<li className='chat-info__notifications notifications'>
			<button
				className={`notifications__btn ${
					chekedNow ? 'notifications__btn-active' : ''
				}`}
				onClick={() => activeList()}
			>
				{' '}
				<svg
					width='24px'
					height='24px'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z'
						fill='#0D0D0D'
					/>
				</svg>
			</button>
			<ul
				className={`notifications__list ${
					openList ? 'notifications__list-active' : ''
				}`}
			>
				<li
					className='notifications__close'
					onClick={() => setOpenList(!openList)}
				>
					<img width={25} height={25} src='./img/close.svg' alt='close' />{' '}
				</li>

				<li className='notifications__item'>
					Дякую за відвідування мого проекту зверніть увагу, що проект
					знаходиться на стадії розробки і деякий функціонал не доступний!
				</li>
			</ul>
		</li>
	)
	
};

export default Notifications;