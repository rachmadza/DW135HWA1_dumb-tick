import { GET_EVENTS_TODAY, GET_EVENTS_UPCOMING, GET_EVENTS_DETAIL } from '../config/constants'

const initialState = {
    today: [],
    upcoming: [],
    detail: [],
    isLoading: false,
    error: false
}

export const events = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_EVENTS_TODAY}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${GET_EVENTS_TODAY}_FULFILLED`:
            return {
                ...state,
                today: action.payload.data,
                isLoading: false
            }
        case `${GET_EVENTS_TODAY}_REJECTED`:
            return {
                error: true,
                isLoading: false
            }

        case `${GET_EVENTS_UPCOMING}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${GET_EVENTS_UPCOMING}_FULFILLED`:
            return {
                ...state,
                upcoming: action.payload.data,
                isLoading: false
            }
        case `${GET_EVENTS_UPCOMING}_REJECTED`:
            return {
                error: true,
                isLoading: false
            }

        case `${GET_EVENTS_DETAIL}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${GET_EVENTS_DETAIL}_FULFILLED`:
            return {
                ...state,
                detail: action.payload.data,
                isLoading: false
            }
        case `${GET_EVENTS_DETAIL}_REJECTED`:
            return {
                error: true,
                isLoading: false
            }
            
        default:
            return state;
    }
}