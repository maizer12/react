import React, { useState } from 'react'
import './sort.Module.scss'
const Sort = () => {
	const sortItem = ['Усі', 'Непрочитані', 'Від друзів']
	const [itemActivation, setItemActivation] = useState(0)
	const [sortOpen, setSortOpen] = useState(false)
	return (
		<div className='sort'>
			<button onClick={() => setSortOpen(!sortOpen)} className='sort__btn'>
				Сортувати
				<img
					style={sortOpen ? { transform: '' } : { transform: 'rotate(180deg)' }}
					src='./img/arow.svg'
					width={17}
					height={17}
					alt='arrow'
				/>
			</button>
			<ul
				className={`sort__list ${
					sortOpen ? 'sort__list-active' : ''
				}`}
			>
				{sortItem.map((e, i) => (
					<li
						key={i}
						onClick={() => setItemActivation(i)}
						className={
							itemActivation === i
								? 'sort__item sort__item-active'
								: 'sort__item'
						}
					>
						{e}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sort
