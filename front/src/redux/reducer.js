
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER,ORDER, GET_CHARACTERS } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
               // allCharacters: [...state.myFavorites]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }    
        case FILTER:
             const allCharsFiltered = state.allCharacters.filter((char) => char.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharsFiltered
            }
        case ORDER:
            return {
                ...state,
                myFavorites: 
                action.payload === "ascendente"
                ? state.allCharacters.sort((a, b) => a.id < b.id)
                : state.allCharacters.sort((a, b) => a.id > b.id)
                
            }
        default:
            return {...state}
    }
}

