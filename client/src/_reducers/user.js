import { REGISTER, LOGIN, PROFILE } from '../config/constants'


const initialState = {
  userRegister: [],
  userLogin: [],
  profile: [],
  status: false,
  isLoading: false,
  error: false
}


export const user = (state = initialState, action) => {
  switch (action.type) {
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        status: false
      }
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        userRegister: action.payload.data,
        isLoading: false,
        status: true
      }
    case `${REGISTER}_REJECTED`:
      return {
        error: true,
        isLoading: false,
        status: false
      }

    case `${LOGIN}_PENDING`:
      return {
        ...state,
        isLoading: true,
        status: false
      }
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        userLogin: action.payload.data,
        isLoading: false,
        status: true
      }
    case `${LOGIN}_REJECTED`:
      return {
        error: true,
        isLoading: false,
        status: false
      }

    case `${PROFILE}_PENDING`:
      return {
        ...state,
        isLoading: true,
        status: false
      }
    case `${PROFILE}_FULFILLED`:
      return {
        ...state,
        profile: action.payload.data,
        isLoading: false,
        status: true
      }
    case `${PROFILE}_REJECTED`:
      return {
        error: true,
        isLoading: false,
        status: false
      }

    default:
      return state;
  }
}