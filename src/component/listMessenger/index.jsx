import React from 'react'
import './listMessenger.Module.scss'
import Sort from '../sort'
import Chat from '../chat'
import People from '../people'
import SettingProfile from '../settingProfile'
const ListMessenger = () => {
	return (
		<>
			<div className='list-messenger'>
				<div className='list-messenger__head'>
					<Sort />
					<div className='list-messenger__setting'>
						<SettingProfile/>
					</div>
				</div>
				<button className='list-messenger__btn'>
					<img
						width={25}
						height={25}
						src='./img/message.svg'
						className='list-messenger__icon'
						alt='messenger'
					/>
					Останні листи
				</button>
				<Chat />
				<People />
			</div>
		</>
	)
}

export default ListMessenger
