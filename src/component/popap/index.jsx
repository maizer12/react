import React, { useEffect, useMemo, useState } from 'react'
import './popap.Module.scss'
import { setIndex } from '../../redux/slices/dopSettingSlice'
import { setOut } from '../../redux/slices/newMessangSlice'
import { useDispatch, useSelector } from 'react-redux'
import chat from '../../json/messenger.json'
const Popap = () => {
	const outChat = useSelector(state => state.newMessang.out)
	const index = useSelector(state => state.dopSetting.index)
	const itemActive = useSelector(state => state.dopSetting.value)
	const chatNum = useSelector(state => state.navigation.num)
	const [popapOpen, setPopapOpen] = useState(false)
	const [click, setClick] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
		if (click && index === 0) {
			dispatch(setOut(outChat.map((e, i) => (i === chatNum ? true : e))))
			setPopapOpen(false)
			dispatch(setIndex(55))
		}
	}, [click])
	useMemo(() => {
		if (index <= 2) {
			setPopapOpen(true)
		}
	}, [index])
	function cancellation() {
		dispatch(setIndex(55))
		setPopapOpen(false)
	}
	return (
		<div className={`popap ${popapOpen ? 'popap-active' : ''}`}>
			<h5 className='popap__title'>
				Ви упевнині, що хочете{' '}
				{itemActive[index <= 2 ? index : 0].toLowerCase()}?
			</h5>
			<div className='popap__buttons'>
				<button onClick={() => setClick(!click)} className='popap__btn'>
					Підтвердити
				</button>
				<button onClick={() => cancellation()} className='popap__btn'>
					Відміна
				</button>
			</div>
		</div>
	)
}

export default Popap
