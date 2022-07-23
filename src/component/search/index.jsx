import React from 'react';
import './search.Module.scss'
const Search = () => {
	return (
		<div className='search'>
			<input className='search__input' placeholder='Пошук...' type='text' />
			<button className="search__btn">
				<img width={20} height={20} src="./img/search.svg" alt="" />
			</button>
			
		</div>
	)
};

export default Search;