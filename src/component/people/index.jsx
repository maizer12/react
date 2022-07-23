import React from 'react';
import './people.Module.scss'

const People = () => {
	return (
		<div className='people'>
			<div className='people-head'>
				<h5 className='people-head__title'>користувачі</h5>
				<p className='people-head__num'>0</p>
			</div>
			<ul className='people-items'>
				<li className='people-items__item'>
					<img
						width={25}
						height={25}
						src='./img/user/1.jpg'
						className='people-items__photo'
						alt='user'
					/>
					<h6 className='people-items__name'>Orlando Diggs</h6>
				</li>
			</ul>
		</div>
	)
};

export default People;