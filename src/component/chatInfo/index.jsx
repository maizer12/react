import React from 'react'
import Notifications from '../notifications'
import Search from '../search'
import './chatInfo.Module.scss'
import { useSelector } from 'react-redux'
import Additionally from '../additionally'
const ChatInfo = () => {
		const chatItem = useSelector(state => state.navigation.value)
			const chatNum = useSelector(state => state.navigation.num)
	return (
		<div className='chat-info'>
			<h4 className='chat-info__name'>#{chatItem[chatNum]}</h4>
			<ul className='chat-info__setting'>
				<li className='chat-info__people'>
					<svg
						width='20'
						height='20'
						viewBox='0 0 10 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M7.40905 13.5H3.09086C1.66001 13.5 0.500021 12.4087 0.500021 11.0625V9.4375C0.500021 8.37039 1.23359 7.47322 2.24855 7.14305C1.69572 6.44134 1.3636 5.5425 1.3636 4.56256C1.3636 2.31885 3.10363 0.499945 5.25004 0.499945C7.39637 0.499945 9.13631 2.31885 9.13631 4.56256C9.13631 5.5425 8.8042 6.44134 8.25145 7.14305C9.26641 7.47322 9.99998 8.37039 9.99998 9.4375V11.0625C9.99998 12.4087 8.83999 13.5 7.40905 13.5ZM8.27272 4.56256C8.27272 2.76756 6.91947 1.31248 5.25004 1.31248C3.58062 1.31248 2.22735 2.76756 2.22735 4.56256C2.22735 6.35742 3.58062 7.81249 5.25004 7.81249C6.91947 7.81249 8.27272 6.35742 8.27272 4.56256ZM9.13631 9.64067C9.13631 8.77708 8.4397 8.05753 7.50594 7.86622C6.86949 8.34207 6.09218 8.62496 5.25004 8.62496C4.4079 8.62496 3.63051 8.34207 2.99406 7.86622C2.06038 8.05753 1.3636 8.77708 1.3636 9.64067V10.8594C1.3636 11.869 2.31272 12.6876 3.48348 12.6876H7.01652C8.18735 12.6876 9.13631 11.869 9.13631 10.8594V9.64067Z'
							fill='black'
						/>
					</svg>
					1000
				</li>
				<li className='chat-info__search'>
					<Search />
				</li>
				<Notifications />
				<li className='chat-info__additionally'>
					<Additionally/>
				</li>
			</ul>
		</div>
	)
}

export default ChatInfo
