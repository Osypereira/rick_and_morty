import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, GET_CHARACTERS, ORDER } from "./action-types";


export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character}
}

export const deleteFavorite = (id) => {
    return {type: DELETE_FAVORITE, payload: id}
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id}
}
export const getCharacter = (payload) => {
     return {
        type: GET_CHARACTERS, 
        payload
     }
}