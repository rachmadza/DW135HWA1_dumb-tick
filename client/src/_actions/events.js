import { GET_EVENTS_TODAY, GET_EVENTS_UPCOMING, GET_EVENTS_DETAIL } from '../config/constants'
import axios from 'axios'

const now = new Date();
const tommorow = new Date(now.setDate(now.getDate() + 1))

let dateZero = ''
let monthZero = ''
if(tommorow.getDate() < 10){
  dateZero = 0
  monthZero = 0
}

const today = new Date();
let zero = ''

if(today.getDate() < 10){
  zero = 0
}

const dateNow = today.getFullYear() +"-"+ zero +(today.getMonth()+1) +"-"+ zero + today.getDate();

const dateTommorow = tommorow.getFullYear() +"-"+ dateZero +(tommorow.getMonth()+1) +"-"+ monthZero + tommorow.getDate();

export const getEventsToday = () => {
    return {
        type: GET_EVENTS_TODAY,
        payload: axios({
            method: 'GET',
            url: "http://localhost:5000/events?startTime=" + dateNow
        }) 
    }
}

export const getEventsUpcoming = () => {
    return {
        type: GET_EVENTS_UPCOMING,
        payload: axios({
            method: 'GET',
            url: "http://localhost:5000/events?startTime=" + dateTommorow
        }) 
    }
}

export const getEventDetail = (id) => {
    return {
        type: GET_EVENTS_DETAIL,
        payload: axios({
            method: 'GET',
            url: `http://localhost:5000/event/${id}`
        }) 
    }
}