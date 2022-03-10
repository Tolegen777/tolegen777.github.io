import {AppStateType} from "../redux/redux-store";

export const getBurgers = (state:AppStateType) => {
    return state.menuLists.burgers
}

export const getDrinks = (state:AppStateType) => {
    return state.menuLists.drinks
}

export const getElseThings = (state:AppStateType) => {
    return state.menuLists.elseThings
}

export const getElementsSize = (state:AppStateType) => {
    return state.menuLists.elementsSize
}