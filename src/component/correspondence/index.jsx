import React from 'react';
import ChatInfo from '../chatInfo';
import MessageBox from '../messageBox';
import Textarea from '../textarea';
import './correspondence.Module.scss'


const Correspondence = () => {
	return <div className='correspondence'>
		<ChatInfo/>
		<MessageBox/>
		<Textarea/>
	</div>
};

export default Correspondence;