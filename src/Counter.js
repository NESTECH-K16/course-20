import React, { useCallback, useEffect, useState } from 'react'
import useCounter from './hooks/counter-hook'
import { DE_CREASE, IN_CREASE } from './const'

const Counter = () => {
	const [counter, changeCounter, number, setNumber] = useCounter()

	return (
		<div className='counter'>
			<h2 style={{ color: 'black' }}>Counter</h2>
			<span style={{ color: 'black' }}>{counter}</span>
			<button onClick={() => changeCounter(IN_CREASE)}>InCrease</button>
			<button onClick={() => changeCounter(DE_CREASE)}>Decrease</button>
			<input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
		</div>
	)
}

export default Counter

