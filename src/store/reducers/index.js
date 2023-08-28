import { applyMiddleware, combineReducers, compose } from '@reduxjs/toolkit'
import { counterReducer } from './countReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	counter: counterReducer,
})

export default rootReducer

