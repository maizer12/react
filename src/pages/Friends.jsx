import React, { useEffect } from 'react'
import './friends.Module.scss'
import { useDispatch } from 'react-redux'
import { setPages } from '../redux/slices/navigationSlice'
const Friends = () => {
	const [friendsAdd, setFriendsAdd] = React.useState(false)
	const [floorOpen, setFloorOpen] = React.useState(false)
	const florItem = ['Не вибрано', 'Чол', 'Жін']
	const [florActive, setFlorActive] = React.useState(0)
	const dispatch = useDispatch()
	useEffect(()=>{
		if(window.location.href == 'http://localhost:3000/friends'){
			dispatch(setPages(1))
		}
	},[])
	
	return (
		<div className='friends'>
			<ul className='friends-head'>
				<li className='friends-head__search'>
					<input
						type='text'
						placeholder="Введіть ім'я"
						className='friends-head__input'
					/>
					<div className='friends-head__btn'>Пошук</div>
				</li>
			</ul>
			<ul className='friends-filter'>
				<li className='friends-filter__title'>фільтрувати</li>
				<li className='friends-filter__item'>Online</li>
				<li className='friends-filter__item'>З фото</li>
				<li className='friends-filter__item'>Популярні</li>
				<li className='floor'>
					<button
						onClick={() => setFloorOpen(!floorOpen)}
						className='floor__name'
					>
						Стать
						<img
							className={floorOpen ? 'floor__img-active' : ''}
							src='./img/arrow-bottom.svg'
							alt='arrow'
						/>
					</button>
					<ul
						className={`floor__items ${floorOpen ? 'floor__items-active' : ''}`}
					>
						{florItem.map((e, i) => (
							<li key={e}
								onClick={() => setFlorActive(i)}
								className={`floor__item ${
									florActive === i ? 'floor__item-active' : ''
								}`}
							>
								{e}
							</li>
						))}
					</ul>
				</li>
				<li className='friends-filter__buttons'>
					<button className='friends-filter__btn'>
						<span>Зберегти</span>
					</button>
					<button className='friends-filter__btn'>
						<span>Скинути</span>
					</button>
				</li>
			</ul>
			<ul className='friends-users'>
				<li className='friends-users__item'>
					<img
						width={60}
						height={60}
						className='friends-users__icon'
						src='./img/user/1.jpg'
						alt=''
					/>
					<h4 className='friends-users__name'>Иван</h4>
					<p className='friends-users__floor'>Чол</p>
					<h5 className='friends-users__popular'>друзів 44 </h5>
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
							src={friendsAdd ? './img/remove-user.svg' : './img/add-user.svg'}
							alt='uaser-add'
						/>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Friends
