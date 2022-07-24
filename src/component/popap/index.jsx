import React, { useEffect, useMemo, useState } from 'react'
import './popap.Module.scss'
import { useSelector } from 'react-redux'
const Popap = () => {
	const index = useSelector(state => state.dopSetting.index)
	const itemActive = useSelector(state => state.dopSetting.value)
	const clickActive = useSelector(state => state.dopSetting.click)
	const [popapOpen, setPopapOpen] = useState(false)
	useEffect(() => {
		if (clickActive) {
			setPopapOpen(true)
		}
	}, [index])

	return (
		<div className={`popap ${popapOpen ? 'popap-active' : ''}`}>
			<h5 className='popap__title'>
				Ви упевнині, що хочете {itemActive[index <= 2 ? index : 0].toLowerCase()}
				?
			</h5>
			<div className='popap__buttons'>
				<button className='popap__btn'>Підтвердити</button>
				<button onClick={() =>setPopapOpen(false)} className='popap__btn'>
					Відміна
				</button>
			</div>
		</div>
	)
}

export default Popap
