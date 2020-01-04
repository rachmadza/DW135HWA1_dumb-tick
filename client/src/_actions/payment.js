import { CREATE_ORDER, PAYMENT_LIST, PAYMENT, TICKET } from '../config/constants'

import axios from 'axios'

export const setOrder = (order) => {
  return {
      type: CREATE_ORDER,
      payload: axios({
          method: 'POST',
          url: "http://localhost:5000/register",
          data: order
      }) 
  }
}

export const getPaymentList = () => {
  let token = localStorage.getItem("AUTH_TOKEN");
  token = "Bearer " + token;
  return {
      type: PAYMENT_LIST,
      payload: axios({
          method: 'GET',
          url: "http://localhost:5000/orders",
          headers: {
            Authorization: token
          }
      }) 
  }
}

export const getPayment = (id) => {
  let token = localStorage.getItem("AUTH_TOKEN");
  token = "Bearer " + token;
  return {
      type: PAYMENT,
      payload: axios({
          method: 'GET',
          url: `http://localhost:5000/order/${id}`,
          headers: {
            Authorization: token
          }
      }) 
  }
}

export const getTicket = () => {
  let token = localStorage.getItem("AUTH_TOKEN");
  token = "Bearer " + token;
  return {
      type: TICKET,
      payload: axios({
          method: 'GET',
          url: `http://localhost:5000/myTicket`,
          headers: {
            Authorization: token
          }
      }) 
  }
}