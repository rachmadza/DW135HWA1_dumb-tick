import { createStore, combineReducers, applyMiddleware } from 'redux'
import { promise, logger } from './middleware'

// >>> example reducer
import { categories } from '../_reducers/categories'
import { events } from '../_reducers/events'


const reducers = combineReducers({
    // >>> example 
    categories,
    events
})

const store = createStore(reducers,
    applyMiddleware(promise, logger))

export default store