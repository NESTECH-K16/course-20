import { useCallback, useState } from 'react'
import { IN_CREASE } from '../const'

const useCounter = () => {
	const [counter, setCounter] = useState(0)
	const [number, setNumber] = useState(1)

	const changeCounter = useCallback(
		(key) => {
			setCounter((prevState) => {
				if (key === IN_CREASE) {
					return prevState + number
				}
				return prevState - number
			})
		},
		[number]
	)
	return [counter, changeCounter, number, setNumber]
}

export default useCounter

