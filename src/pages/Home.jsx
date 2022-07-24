import React from 'react';
import Correspondence from '../component/correspondence';
import ListMessenger from '../component/listMessenger';
import Popap from '../component/popap';
import Profile from '../component/profile';

const Home = () => {
	return (
		<div className='home'>
			<ListMessenger/>
			<Correspondence/>
			<Profile/>
			<Popap/>
		</div>
	);
};

export default Home;