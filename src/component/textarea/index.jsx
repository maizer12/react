import React, { useMemo, useState } from 'react'
import './textarea.Module.scss'
import Picker from 'emoji-picker-react'
import { setValue, setClick } from '../../redux/slices/newMessangSlice'
import { useSelector, useDispatch } from 'react-redux'
const Textarea = () => {
	const [inputValue, setInputValue] = useState('')
	const [emojiOpen, setEmojiOpen] = useState(false)
	const [chosenEmoji, setChosenEmoji] = useState(null)
	const emojiRef = React.useRef()
	const click = useSelector(state => state.newMessang.click)
	const dispatch = useDispatch()
	function send() {
		dispatch(setValue(inputValue))
		dispatch(setClick(!click))
		setInputValue('')
	}
	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(emojiObject)
	}
	// проверка чи мишка на обэкты
	if (emojiOpen === true) {
		document.body.addEventListener('click', e => {
			if (!e.path.includes(emojiRef.current)) {
				setEmojiOpen(false)
			}
		})
	}
	useMemo(() => {
		if (chosenEmoji != null) {
			setInputValue(inputValue + chosenEmoji.emoji)
		}
	}, [chosenEmoji])
	function test(event) {
		setInputValue(event.target.value)
	}
	return (
		<div className='textarea'>
			<button
				className='textarea__emoji'
				onMouseEnter={() => setEmojiOpen(!emojiOpen)}
				onClick={() => setEmojiOpen(!emojiOpen)}
			>
				<img width={30} height={30} src='./img/emoji.svg' alt='emoji' />
			</button>
			<textarea
				onChange={event => test(event)}
				value={inputValue}
				className='textarea__input'
				placeholder='Написати повідомлення'
				type='text'
			/>
			<div
				ref={emojiRef}
				className={`textarea__list ${emojiOpen ? 'textarea__list-open' : ''}`}
			>
				<Picker onEmojiClick={onEmojiClick} />
			</div>
			<button onClick={() => send()} className='textarea__btn'>
				<svg
					version='1.1'
					id='Layer_1'
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					viewBox='0 0 503.82 503.82'
					width={35}
				>
					<g transform='translate(1 1)'>
						<path
							fill='#E2E3E5;'
							d='M491.909,112.838L221.64,311.763l167.869,109.115L502.82,114.517
		C501.981,114.517,501.142,112.838,491.909,112.838'
						/>
						<path fill='#B6B6B6' d='M175.476,408.287l99.043-66.308' />
						<g>
							<polygon
								fill='#CCCCCC'
								points='209.05,299.173 175.476,408.287 274.519,341.979 		'
							/>
							<polygon
								fill='#CCCCCC'
								points='209.05,299.173 176.316,408.287 150.296,265.599 494.427,89.336 		'
							/>
							<path
								fill='#CCCCCC'
								d='M486.034,104.445c-3.357,0-5.875-1.679-7.554-4.197L209.05,299.173l167.869,109.115
			l111.633-303.843C488.552,104.445,487.712,104.445,486.034,104.445'
							/>
						</g>
						<polygon
							fill='#E2E3E5'
							points='444.066,122.91 209.05,299.173 360.132,391.5 460.853,114.517 	'
						/>
						<path
							fill='#FFFFFF'
							d='M466.729,95.212L6.768,190.058l143.528,75.541l323.148-165.351
		C470.086,99.409,468.407,97.73,466.729,95.212'
						/>
						<path
							fill='#E2E3E5'
							d='M444.066,114.517L32.788,206.845l117.508,58.754l299.646-146.046
		C447.424,118.714,444.906,117.035,444.066,114.517'
						/>
						<g>
							<path
								fill='#B6B6B6'
								d='M376.919,416.681c-1.679,0-3.357-0.839-4.197-1.679L204.853,305.887
			c-2.518-0.839-4.197-3.357-4.197-6.715c0-2.518,0.839-5.036,3.357-6.715l201.443-147.725l-250.964,128.42
			c-2.518,0.839-5.036,0.839-7.554,0L3.411,197.612c-3.357-1.679-5.036-5.036-4.197-8.393c0-4.197,2.518-6.715,5.875-7.554
			l486.82-100.721c1.679,0,2.518,0,4.197,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c1.679,0.839,3.357,1.679,5.036,3.357l0,0
			l0,0c0,0,0,0,0,0.839c1.679,1.679,1.679,3.357,1.679,5.036l0,0l0,0c0,0.839,0,0.839,0,1.679v0.839L385.312,411.645
			c-0.839,2.518-2.518,4.197-5.036,5.036C378.597,416.681,377.758,416.681,376.919,416.681z M224.158,298.333l148.564,96.525
			l104.079-282.02L224.158,298.333z M31.948,193.415l118.348,62.951L435.673,110.32L31.948,193.415z'
							/>
							<path
								fill='#B6B6B6'
								d='M175.476,416.681c-2.518,0-5.036-1.679-6.715-3.357c-2.518-4.197-1.679-9.233,2.518-11.751
			l99.043-66.308c4.197-2.518,9.233-1.679,11.751,2.518c2.518,4.197,1.679,9.233-2.518,11.751l-99.043,66.308
			C178.834,415.841,177.155,416.681,175.476,416.681z'
							/>
							<path
								fill='#B6B6B6'
								d='M176.316,416.681C175.476,416.681,175.476,416.681,176.316,416.681
			c-4.197,0-7.554-3.357-8.393-6.715l-26.02-142.689c-0.839-3.357,0.839-7.554,4.197-9.233L490.23,81.782
			c4.197-1.679,8.393-0.839,10.911,3.357c2.518,3.357,1.679,8.393-2.518,10.911l-282.02,208.157L183.87,410.805
			C183.03,414.163,179.673,416.681,176.316,416.681z M159.529,270.635l18.466,102.4l22.662-75.541
			c0.839-1.679,1.679-3.357,3.357-4.197l201.443-147.725L159.529,270.635z'
							/>
							<path
								fill='#B6B6B6'
								d='M175.476,416.681c-1.679,0-3.357-0.839-5.036-1.679c-2.518-2.518-4.197-5.875-3.357-9.233
			l33.574-109.115c0.839-2.518,2.518-4.197,5.036-5.036c2.518-0.839,5.036-0.839,7.554,0.839l65.469,42.807
			c2.518,1.679,4.197,4.197,4.197,6.715s-1.679,5.875-3.357,6.715l-99.043,66.308C178.834,415.841,177.155,416.681,175.476,416.681z
			 M214.086,312.602l-23.502,75.541l68.826-46.164L214.086,312.602z'
							/>
						</g>
					</g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
				</svg>
			</button>
		</div>
	)
}

export default Textarea
