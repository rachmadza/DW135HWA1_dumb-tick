import { REGISTER, LOGIN, PROFILE } from '../config/constants'
import axios from 'axios'

export const setRegister = (reg) => {
  return {
      type: REGISTER,
      payload: axios({
          method: 'POST',
          url: "http://localhost:5000/register",
          data: reg
      }) 
  }
}

export const setLogin = (data) => {
  return {
      type: LOGIN,
      payload: axios({
          method: 'POST',
          url: "http://localhost:5000/login",
          data: data
      }) 
  }
}

export const getProfile = () => {
  let token = localStorage.getItem("AUTH_TOKEN");
  token = "Bearer " + token;
  return {
      type: PROFILE,
      payload: axios({
          method: 'GET',
          url: "http://localhost:5000/profile",
          headers: {
            Authorization: token
          }
      }) 
  }
}