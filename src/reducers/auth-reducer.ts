// @ts-ignore
import { Dispatch } from "redux";
// @ts-ignore
import {authApi} from "../Components/api/api.ts";
import {AppStateType} from "../redux/redux-store";
import {ThunkAction} from "redux-thunk";



export const setAuthDataAC = (email:string,login:string,id:number,isAuth:boolean):SetAuthDataACType =>
    ({type: 'GET_AUTH_DATA', id,email,login,isAuth})
export const getErrorAC = (error:string):GetErrorACType => ({type: 'GET_ERROR', error})

export const setRegisterUserDataAC = (name:string,lastName:string,email:string,password:string,confirmedPassword:string):SetUserRegisterDataACType =>
    ({type: 'USER_REGISTER', name, lastName, email, password, confirmedPassword})


const GET_AUTH_DATA = "GET_AUTH_DATA"
const GET_ERROR = "GET_ERROR"
const USER_REGISTER = "USER_REGISTER"

type RegisteredUsersType = {
    name: string | null,
    lastName:string| null,
    email:string | null,
    password:string | null,
    confirmedPassword:string | null
}

type InitialStateType = {
    id:number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean,
    inputEmail: string | null,
    inputPassword: string | null,
    error: string | '',
    isError: boolean,
    registeredUsers: Array<RegisteredUsersType>


}

let initialState:InitialStateType = {
    id:null,
    email: null,
    login: null,
    isAuth:false,
    inputEmail: null,
    inputPassword: null,
    error: '',
    isError: false,
    registeredUsers: [
        {
            name: null,
            lastName:null,
            email:null,
            password:null,
            confirmedPassword:null
        }
    ]


}

const authReducer = (state = initialState, action:ActionType):InitialStateType => {

    switch (action.type) {
        case GET_AUTH_DATA: {
            let stateCopy = {...state};
            stateCopy.id = action.id;
            stateCopy.email = action.email;
            stateCopy.login = action.login;
            stateCopy.isAuth = action.isAuth;

            return stateCopy;

        }
        case USER_REGISTER: {
            return {
                ...state,
                registeredUsers: [...state.registeredUsers,
                    {name:action.name ,
                        lastName:action.lastName,
                        email:action.email,
                        password:action.password,
                        confirmedPassword:action.confirmedPassword
                    }]

            }


        }

        case GET_ERROR: {
            let stateCopy = {...state};
            stateCopy.error = action.error;
            stateCopy.isError = true;
            return stateCopy;

        }
        default:
            return state;
    }

}

export const getAuthDataThunk = () => (dispatch: DispatchType) => {
    debugger

    authApi.getAuth().then(
        data => {


            if (data.resultCode ===0) {

                console.log(data.data+' kkk')

                let {email,login,id} = data.data
                dispatch(setAuthDataAC(email,login,id,true));
            }


        }
    )


}

export const logoutThunk = () => (dispatch:DispatchType) => {

    authApi.logout().then(
        data => {

            if (data.resultCode ===0) {


                //console.log(data.data)

                // let {email,login,id} = data.data
                dispatch(setAuthDataAC(null,null,null,false));
            }


        }
    )


}

export const loginThunk = (email,password,rememberMe):ThunkAction<any, AppStateType, unknown, ActionType> => (dispatch) => {

    authApi.login(email,password,rememberMe).then(
        data => {

            if (data.resultCode ===0) {
                //console.log(data.data)

                dispatch(getAuthDataThunk())
            }
            else {

                //dispatch(getErrorAC(data.messages[0]))
                alert(data.messages[0])
                //console.log(data.messages[0])

            }


        }
    )


}

export const registerThunk = ():ThunkAction<any, AppStateType, unknown, ActionType> => (dispatch) => {

    authApi.register().then(
        response => {
            if (response.status ===200) {

                console.log(response.data)
                //dispatch(getAuthDataThunk())
            }
            else {

                //dispatch(getErrorAC(data.messages[0]))
                //console.log(data.messages[0])

            }


        }
    )


}

export const registerPostThunk = ():ThunkAction<any, AppStateType, unknown, ActionType> => (dispatch) => {

    authApi.registerPost(31,"ddd","dds").then(
        response => {
            if (response.status ===201) {

                console.log(response.data)
                //dispatch(getAuthDataThunk())
            }
            else {

                //dispatch(getErrorAC(data.messages[0]))
                //console.log(data.messages[0])

            }


        }
    )


}

type SetAuthDataACType = {
    type: typeof GET_AUTH_DATA
    email: string,
    login: string,
    id: number,
    isAuth: boolean
}

type SetUserRegisterDataACType = {
    type: typeof USER_REGISTER
    name: string
    lastName: string,
    email: string,
    password: string,
    confirmedPassword: string
}

type GetErrorACType = {
    type: typeof GET_ERROR
    error: string,

}

type ActionType = GetErrorACType | SetAuthDataACType | SetUserRegisterDataACType

type DispatchType = Dispatch<ActionType>
type GetStateType = () => AppStateType

export default authReducer;