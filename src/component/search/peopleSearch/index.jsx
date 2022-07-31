import React from 'react';
import './peopleSearch.Module.scss'
import { useDispatch } from 'react-redux';
import { setValue } from '../../../redux/slices/peopleSlice.js'
const PeopleSearch = () => {
	const dispath = useDispatch()
	return (
		<section className='people-search'>
			<ul className='friends-head'>
				<li className='friends-head__search'>
					<input
						onChange={event => dispath(setValue(event.target.value))}
						type='text'
						placeholder="Введіть ім'я"
						className='friends-head__input'
					/>
					<div className='friends-head__btn'>Пошук</div>
				</li>
			</ul>
		</section>
	)
};

export default PeopleSearch;