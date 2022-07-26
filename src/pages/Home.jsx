import React from 'react';
import Correspondence from '../component/correspondence';
import ListMessenger from '../component/listMessenger';
import Popap from '../component/popap';
import PopapAdd from '../component/popap/popapAdd';
import Profile from '../component/profile';

const Home = () => {
	return (
		<div className='home'>
			<ListMessenger/>
			<Correspondence/>
			<Profile/>
			<Popap/>
			<PopapAdd/>
		</div>
	);
};

export default Home;