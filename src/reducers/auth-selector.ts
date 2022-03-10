import {AppStateType} from "../redux/redux-store";

export const getAuthLogin = (state:AppStateType) => {
   // @ts-ignore
   return state.auth.login
}

export const getUserAuth = (state:AppStateType) => {
   // @ts-ignore
   return state.auth.isAuth
}

export const getError = (state:AppStateType) => {
   // @ts-ignore
   return state.auth.error
}

export const getIsError = (state:AppStateType) => {
   // @ts-ignore
   return state.auth.isError
}


