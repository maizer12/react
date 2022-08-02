import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setAdd} from '../../../redux/slices/peopleSlice.js'
import people from '../../../json/messenger.json'
import './peopleFriends.Module.scss'

const PeopleFriends = () => {
	const value = useSelector(state => state.people.value)
	const add = useSelector(state => state.people.add)
	const dispath = useDispatch()
	const valueChecked = people.people.filter(e => {
		return e.name.toLowerCase() === value.toLowerCase() ? e : ''
	})
	function addFrend(ind, elem){
		dispath(setAdd(add.map((e, i) => (i === ind ? !e : e))))
		add[ind]
			? (elem.popular = Number(elem.popular) - 1)
			: (elem.popular = Number(elem.popular) + 1)
	}
	function checked()
	{return(value.length >= 1)
		? valueChecked
		: people.people}

	return (
		<section className='people-friends'>
			<ul className='friends-users'>
				{checked().map((e, ind) => (
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
							onClick={() => addFrend(ind, e)}
							className={
								add[ind]
									? 'friends-users__btn btn-remove'
									: 'friends-users__btn'
							}
						>
							<span>{add[ind] ? 'Видалити' : 'Додати'}</span>
							<img
								className='friends-users__img'
								width={20}
								src={add[ind] ? './img/remove-user.svg' : './img/add-user.svg'}
								alt='uaser-add'
							/>
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}

export default PeopleFriends
