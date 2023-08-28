import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { getState } from 'redux'

const middlewareEnhancer = applyMiddleware(thunk)

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers)

console.log('store.getState()', store.getState())

export default store

