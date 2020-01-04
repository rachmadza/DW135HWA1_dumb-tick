import { CREATE_ORDER, PAYMENT_LIST, PAYMENT, TICKET } from '../config/constants'

const initialState = {
  orderData: [],
  paymentList: [],
  payment: [],
  ticket: [],
  status: false,
  isLoading: false,
  error: false
}

export const order = (state = initialState, action) => {
  switch (action.type) {
    case `${CREATE_ORDER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        status: false
      }
    case `${CREATE_ORDER}_FULFILLED`:
      return {
        ...state,
        orderData: action.payload.data,
        isLoading: false,
        status: true
      }
    case `${CREATE_ORDER}_REJECTED`:
      return {
        error: true,
        isLoading: false,
        status: false
      }

    case `${PAYMENT_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      }
    case `${PAYMENT_LIST}_FULFILLED`:
      return {
        ...state,
        paymentList: action.payload.data,
        isLoading: false,
      }
    case `${PAYMENT_LIST}_REJECTED`:
      return {
        error: true,
        isLoading: false,
      }

    case `${PAYMENT}_PENDING`:
      return {
        ...state,
        isLoading: true,
      }
    case `${PAYMENT}_FULFILLED`:
      return {
        ...state,
        payment: action.payload.data,
        isLoading: false,
      }
    case `${PAYMENT}_REJECTED`:
      return {
        error: true,
        isLoading: false,
      }

    case `${TICKET}_PENDING`:
      return {
        ...state,
        isLoading: true,
      }
    case `${TICKET}_FULFILLED`:
      return {
        ...state,
        ticket: action.payload.data,
        isLoading: false,
      }
    case `${TICKET}_REJECTED`:
      return {
        error: true,
        isLoading: false,
      }

    default:
      return state;
  }
}