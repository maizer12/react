import React from 'react'
import './navigation.Module.scss'
import { Link } from 'react-router-dom'
import { useDispatch,  useSelector } from 'react-redux'
import { setOpen, setPages } from '../../redux/slices/navigationSlice'

const Navigation = () => {
	const dispatch = useDispatch()
	const activationNav = useSelector(state => state.navigation.pages)
	const iconMenu = [1, 2,]
	const link = ['/', '/friends',]
	return (
		<>
			<nav className='menu'>
				<ul className='menu__items'>
					{iconMenu.map((e, i) => (
						<Link
							to={link[i]}
							key={i}
							onClick={() => dispatch(setPages(i))}
							className={
								activationNav === i
									? 'menu__item menu__item-active'
									: 'menu__item'
							}
						>
							<img
								className='menu__icon'
								width={40}
								height={40}
								src={`./img/menu/${i}.svg`}
								alt='menu-item'
							/>
						</Link>
					))}
				</ul>
				<div onClick={() => dispatch(setOpen())} className='menu__add'>
					<img src='./img/menu/add.svg' alt='add-new' />
				</div>
			</nav>
		</>
	)
}

export default Navigation
