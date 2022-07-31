import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import people from '../../../json/messenger.json'
import './peopleFriends.Module.scss'

const PeopleFriends = () => {
	const [friendsAdd, setFriendsAdd] = React.useState(false)
	const value = useSelector(state => state.people.value)

	const valueChecked = people.people.filter(e => {
		return e.name.toLowerCase() === value.toLowerCase() ? e : ''
	})
	
	function checked()
	{return(value.length >= 1)
		? valueChecked
		: people.people}

	return (
		<section className='people-friends'>
			<ul className='friends-users'>
				{checked().map(e => (
					<li key={e.id} className='friends-users__item'>
						<img
							width={60}
							height={60}
							className='friends-users__icon'
							src='./img/user/1.jpg'
							alt=''
						/>
						<h4 className='friends-users__name'>{e.name}</h4>
						<p className='friends-users__floor'>{e.floor}</p>
						<h5 className='friends-users__popular'>друзів {e.popular} </h5>
						<button
							onClick={() => setFriendsAdd(!friendsAdd)}
							className={
								friendsAdd
									? 'friends-users__btn btn-remove'
									: 'friends-users__btn'
							}
						>
							<span>{friendsAdd ? 'Видалити' : 'Додати'}</span>
							<img
								className='friends-users__img'
								width={20}
								src={
									friendsAdd ? './img/remove-user.svg' : './img/add-user.svg'
								}
								alt='uaser-add'
							/>
						</button>
					</li>
				))}
				{/*  */}
			</ul>
		</section>
	)
}

export default PeopleFriends
