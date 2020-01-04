import { createStore, combineReducers, applyMiddleware } from 'redux'
import { promise, logger } from './middleware'

// >>> example reducer
import { categories } from '../_reducers/categories'
import { events } from '../_reducers/events'
import { user } from '../_reducers/user.js'
import { order } from '../_reducers/payment'



const reducers = combineReducers({
    // >>> example 
    categories,
    events,
    user,
    order
})

const store = createStore(reducers,
    applyMiddleware(promise, logger))

export default store