import { GET_CATEGORIES, GET_EVENTS_BY_CATEGORY, GET_CATEGORY_NAME } from '../config/constants'


const initialState = {
    data: [],
    name: [],
    detail: [],
    isLoading: false,
    error: false
}

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_CATEGORIES}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${GET_CATEGORIES}_FULFILLED`:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        case `${GET_CATEGORIES}_REJECTED`:
            return {
                error: true,
                isLoading: false
            }


        case `${GET_EVENTS_BY_CATEGORY}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${GET_EVENTS_BY_CATEGORY}_FULFILLED`:
            return {
                ...state,
                detail: action.payload.data,
                isLoading: false
            }
        case `${GET_EVENTS_BY_CATEGORY}_REJECTED`:
            return {
                error: true,
                isLoading: false
            }


        case `${GET_CATEGORY_NAME}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${GET_CATEGORY_NAME}_FULFILLED`:
            return {
                ...state,
                name: action.payload.data,
                isLoading: false
            }
        case `${GET_CATEGORY_NAME}_REJECTED`:
            return {
                error: true,
                isLoading: false
            }
        default:
            return state;
    }
}