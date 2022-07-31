import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen, setLogin, setMail, setName} from '../../../redux/slices/profileSlice.js'
import './popapSeting.Module.scss'
const PopapSetting = () => {
	const open = useSelector(state => state.profile.open)
	const dispatch = useDispatch()
	const num = useSelector(state => state.profile.num)
	const [value, setValue] = useState('')
	function click(){
		if(num === 1 && value.length > 1){
			dispatch(setLogin(value))
			
		}else if( num === 2 && value.length > 1){
			dispatch(setName(value))
			
		}else if (num === 3 && value.length > 1) {
			dispatch(setMail(value))
			
		}
		setValue(' ')
		dispatch(setOpen())
	}
	return (
		<section className={`popap-setting ${open ? 'popap-setting-active' : ''}`}>
			<h4 className='popap-setting__title'>Будь ласка введіть нові дані!</h4>
			<input
				onChange={(event) => setValue(event.target.value)}
				className='popap-setting__input'
				placeholder='
				Поле для введення'
				type='text'
				value={value}
			/>
			<div className='popap-setting__buttons'>
				<button onClick={() => click()} className='popap-setting__btn'>
					Зберегти
				</button>
				<button
					onClick={() => dispatch(setOpen())}
					className='popap-setting__btn'
				>
					Відмінити
				</button>
			</div>
		</section>
	)
}

export default PopapSetting
