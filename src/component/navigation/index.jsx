import React from 'react'
import './navigation.Module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import {setOpen } from '../../redux/slices/navigationSlice'
const Navigation = () => {
	const dispatch = useDispatch()
	const [activationNav, setActivationNav] = useState(0)
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
							onClick={() => setActivationNav(i)}
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
