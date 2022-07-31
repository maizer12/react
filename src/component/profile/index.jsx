import React from 'react';
import './profile.Module.scss'
import { useSelector, useDispatch} from 'react-redux'
import { newChat } from '../../redux/slices/navigationSlice'
import users from '../../json/messenger.json'
const Profile = () => {
	const dispatch = useDispatch()
	const name =  useSelector(state => state.profile.name)
	const login =  useSelector(state => state.profile.login)
	const mail = useSelector(state => state.profile.mail)
	const telegram = useSelector(state => state.profile.telegram)
	const num = useSelector(state => state.people.num)
	const user = users.people.filter(e => e.id === String(num))[0]
	function btnChat(){
		dispatch(newChat(user.login))
	}
	return (
		<div className='profile'>
			<img className='profile__img' src='./img/user/1.jpg' alt='' />
			<div className='profile__info'>
				<h5 className='profile__name'>@{user.login}</h5>
				<button onClick={() => btnChat()} className='profile__btn'>
					Отправить сообщение
				</button>
				<ul className='profile__list'>
					<li className='profile__item'>
						<span>Друзів:</span>
						<p>{user.popular}</p>
					</li>
					<li className='profile__item'>
						<span>Ім'я користувача:</span>
						<p>{user.name}</p>
					</li>
					<li className='profile__item'>
						<span>Маіл</span>
						<></>
						<a href={'mailto:' + mail}>{user.mail}</a>
					</li>
					<li className='profile__item'>
						<span>Телеграм</span>
						<a href={'https://telegram.me/' + telegram}>@{user.telegram}</a>
					</li>
				</ul>
			</div>
		</div>
	)
};

export default Profile;