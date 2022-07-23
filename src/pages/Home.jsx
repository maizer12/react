import React from 'react';
import Correspondence from '../component/correspondence';
import ListMessenger from '../component/listMessenger';
import Profile from '../component/profile';

const Home = () => {
	return (
		<div className='home'>
			<ListMessenger/>
			<Correspondence/>
			<Profile/>
		</div>
	);
};

export default Home;