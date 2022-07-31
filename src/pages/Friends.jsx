
import './friends.Module.scss'
import { useEffect } from 'react'
import FilterFriends from '../component/filter/filterFriends'
import PeopleSearch from '../component/search/peopleSearch'
import PeopleFriends from '../component/people/peopleFriends'
import { useDispatch } from 'react-redux'
import { setPages } from '../redux/slices/navigationSlice'
const Friends = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		if (window.location.href == 'http://localhost:3000/friends') {
			dispatch(setPages(1))
		}
	}, [])
	
	return (
		<div className='friends'>
			<PeopleSearch/>
			<FilterFriends/>
			<PeopleFriends/>
		</div>
	)
}

export default Friends
