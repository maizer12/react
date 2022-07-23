import React from 'react';
import './profile.Module.scss'
import { useSelector } from 'react-redux'
const Profile = () => {
	const name =  useSelector(state => state.profile.name)
	const login =  useSelector(state => state.profile.login)
	const mail = useSelector(state => state.profile.mail)
	const telegram = useSelector(state => state.profile.telegram)
	return (
		<div className='profile'>
			<img className='profile__img' src='./img/user/1.jpg' alt='' />
			<div className='profile__info'>
				<h5 className='profile__name'>@{login}</h5>
				<ul className='profile__list'>
					<li className='profile__item'>
						<span>Ім'я користувача:</span>
						<p>{name}</p>
					</li>
					<li className='profile__item'>
						<span>Маіл</span>
						<></>
						<a href={'mailto:' + mail}>{mail}</a>
					</li>
					<li className='profile__item'>
						<span>Телеграм</span>
						<a href={'https://telegram.me/' + telegram}>@{telegram}</a>
					</li>
					<li className='profile__item'>
						<span>Дата регистрации</span>
						<p>22.02.2001</p>
					</li>
				</ul>
			</div>
		</div>
	)
};

export default Profile;