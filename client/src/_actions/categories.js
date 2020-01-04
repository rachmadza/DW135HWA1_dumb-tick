import { GET_CATEGORIES, GET_EVENTS_BY_CATEGORY, GET_CATEGORY_NAME } from '../config/constants'
import axios from 'axios'

export const getCategories = () => {
    return {
        type: GET_CATEGORIES,
        payload: axios({
            method: 'GET',
            url: "http://localhost:5000/categories"
        }) 
    }
}

export const getCategoriesById = (id) => {
    return {
        type: GET_EVENTS_BY_CATEGORY,
        payload: axios({
            method: 'GET',
            url: `http://localhost:5000/category/${id}/events`
        }) 
    }
}

export const getCategoryName = (id) => {
    return {
        type: GET_CATEGORY_NAME,
        payload: axios({
            method: 'GET',
            url: `http://localhost:5000/category/${id}/name`
        }) 
    }
}

