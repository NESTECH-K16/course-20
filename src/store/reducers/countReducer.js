export const counterReducer = (state = { counter: 0 }, action) => {
	console.log('action', action)
	switch (action.type) {
		case 'INCREMENT':
			return { counter: state.counter + action.payload }
		case 'DECREMENT':
			return { counter: state.counter - action.payload }
		default:
			return state
	}
}

