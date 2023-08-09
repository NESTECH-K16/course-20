import { useEffect, useReducer, useRef, useState } from 'react'
import Course from './Course'
import './index.scss'

function App() {
	const [film, setFilm] = useState([])
	const nameRef = useRef(null)
	const cityRef = useRef(null)
	// const [name, setName] = useState('')
	// const [city, setCity] = useState('')

	// const [info, setInfo] = useState({ name: '', city: '' })

	const reducerForm = (state, action) => {
		console.log('action', action)
		// if(action)
		// if (action.type === 'SUBMIT') {
		// 	console.log(action.payload)
		// 	return { ...state, ...action.payload }
		// } else if (action.type === 'NONE') {
		// } else {
		// 	return { name: 'TEST', city: 'TEST' }
		// }
		switch (action.type) {
			case 'SUBMIT':
				return { ...state, ...action.payload }
			case 'RESET':
				nameRef.current.value = ''
				cityRef.current.value = ''
				return { name: '', city: '' }
			default:
				return state
		}
	}

	const [formState, dispatch] = useReducer(reducerForm, { name: '', city: '' })

	// const [state, setState] = useState('');

	useEffect(() => {
		// fetch('https://swapi.dev/api/films/')
		// 	.then((result) => {
		// 		console.log('result', result)
		// 		return result.json()
		// 	})
		// 	.then((data) => {
		// 		console.log('data', data)
		//     setFilm(data)
		// 	})
		const getFilms = async () => {
			try {
				const data = await fetch('https://swapi.dev/api/filmsX/')
				const result = await data.json()
				setFilm(result)
				setFilm((prevState, nextState) => {
					return { ...prevState, result }
				})
			} catch (error) {
				console.log(error)
			}
		}

		// getFilms()
		const timer = setTimeout(() => {
			console.log('I see you!!!')
		}, 3000)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	const submitForm = (e) => {
		e.preventDefault()
		dispatch({ type: 'SUBMIT', payload: { name: nameRef.current.value, city: cityRef.current.value } })
		dispatch({ type: 'RESET' })
	}

	return (
		<div className='container'>
			<Course name='JAVA' teacher='Luc' total={100} />
			<form action='' onSubmit={submitForm}>
				<label htmlFor=''>Name</label>
				<input type='text' placeholder='Please enter your name...' ref={nameRef} />
				<label htmlFor=''>City</label>
				<input
					type='text'
					placeholder='Please enter your City...'
					ref={cityRef}
					// onChange={(e) => onChangeInput('city', e.target.value)}
				/>
				<button>Submit</button>
			</form>
			{console.log('formState', formState)}
		</div>
	)
}

export default App

