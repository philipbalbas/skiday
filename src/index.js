import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'

const store = createStore(appReducer, initialState)

console.log('initial store', store.getState())
