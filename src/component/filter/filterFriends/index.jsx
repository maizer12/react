import React, { useMemo } from 'react';
import './filterFriends.Module.scss'
const FilterFriends = () => {
		const [floorOpen, setFloorOpen] = React.useState(false)
		const florItem = ['Не вибрано', 'Чол', 'Жін']
		const filter = ['online', 'З фото', 'Популярні']
		const [florActive, setFlorActive] = React.useState(0)
		const [filterNum, setFilterNum] = React.useState([false, false, false])
		useMemo(()=>{
		}, [filterNum])
		const flor = function (i){
			setFlorActive(i)
			setFloorOpen(false)
		}
	return (
		<ul className='friends-filter'>
			<li className='friends-filter__title'>фільтрувати</li>
			{filter.map((e, i) => (
				<li
					key={e}
					onClick={() =>
						setFilterNum(filterNum.map((b, ind) => (ind === i ? !b : b)))
					}
					className={`friends-filter__item ${filterNum[i] ? 'active' : ''}`}
				>
					{e}
				</li>
			))}

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
						<li
							key={e}
							onClick={() => flor(i)}
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
	)
};

export default FilterFriends;