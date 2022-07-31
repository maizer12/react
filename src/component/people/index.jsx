import React, { useState } from 'react';
import './people.Module.scss'
import { useDispatch, useSelector } from 'react-redux'
import people from '../../json/messenger.json'
import {setNum} from '../../redux/slices/peopleSlice'
const People = () => {
	const num = useSelector((state)=> state.people.num)
	const dispatch = useDispatch()
	return (
		<div className='people'>
			<div className='people-head'>
				<h5 className='people-head__title'>користувачі</h5>
				<p className='people-head__num'>{people.people.length}</p>
			</div>
			<ul className='people-items'>
				{people.people.map((e, i) => (
					<li
						key={e.id}
						onClick={() => dispatch(setNum(i))}
						className={`people-items__item ${num === i ? 'active' : ''}`}
					>
						<img
							width={25}
							height={25}
							src='./img/user/1.jpg'
							className='people-items__photo'
							alt='user'
						/>
						<h6 className='people-items__name'>{e.name}</h6>
					</li>
				))}
			</ul>
		</div>
	)
};

export default People;