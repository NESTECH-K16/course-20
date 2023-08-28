import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../store/actions'

const Home = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.counter)
	// console.log('state', state)
	const increaseHandler = (number) => {
		// javascript obj
		// dispatch({ type: 'INCREMENT', payload: number }) //trigger redux
		increment()
	}

	const decreaseHandler = (number) => {
		dispatch({ type: 'DECREMENT', payload: number })
	}

	return (
		<div className='flex flex-col align-items-center'>
			<span className='text-white'>{state.counter}</span>
			<button onClick={() => increaseHandler(3)} style={{ width: 100 }}>
				Increment 3
			</button>
			<button onClick={() => decreaseHandler(4)} style={{ width: 100 }}>
				Decrement 4
			</button>
			{/* <button>Incre</button> */}
		</div>
	)
}

export default Home

