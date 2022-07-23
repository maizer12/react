import React from 'react';
import './additionally.Module.scss'
const Additionally = () => {
	const [menuOpen, setMenuOpen] = React.useState(false) 
	const menuRef = React.useRef()
	// проверка клика за обэктом
	if(menuOpen === true){
		document.body.addEventListener('click', e=>{
			if(!e.path.includes(menuRef.current)){
				setMenuOpen(false)
				console.log(e.path.includes(menuRef.current))
			}
		})
	}
	return (
		<div className='additionally' ref={menuRef}>
			<button
				onClick={() => setMenuOpen(!menuOpen)}
				className='additionally__button'
			>
				<svg
					width='6'
					height='17'
					viewBox='0 0 6 17'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M3.25001 7C4.21649 7 4.99997 7.78349 4.99997 8.75C4.99997 9.7165 4.21649 10.5 3.25001 10.5C2.28353 10.5 1.49997 9.7165 1.49997 8.75C1.49997 7.78349 2.28353 7 3.25001 7Z'
							fill='black'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M3.25 1.00001C4.21648 1.00001 4.99996 1.7835 4.99996 2.75C4.99996 3.7165 4.21648 4.5 3.25 4.5C2.28353 4.5 1.49997 3.7165 1.49997 2.75C1.49997 1.7835 2.28353 1.00001 3.25 1.00001Z'
							fill='black'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M3.25 13C4.21648 13 4.99996 13.7835 4.99996 14.75C4.99996 15.7165 4.21648 16.5 3.25 16.5C2.28353 16.5 1.49997 15.7165 1.49997 14.75C1.49997 13.7835 2.28353 13 3.25 13Z'
							fill='black'
						/>
					</g>
				</svg>
			</button>
			<ul
				ref={menuRef}
				className={`additionally-list ${
					menuOpen ? 'additionally-list__active' : ''
				}`}
			>
				<li className='additionally-list__item'>Покинути чат</li>
				<li className='additionally-list__item'>Удалить историю</li>
				<li className='additionally-list__item'>Змінити назву</li>
			</ul>
		</div>
	)
};

export default Additionally;