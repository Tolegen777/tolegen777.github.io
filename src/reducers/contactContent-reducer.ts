// @ts-ignore
import { Dispatch } from "redux";
// @ts-ignore
import {authApi} from "../Components/api/api.ts";
// @ts-ignore
import {AppStateType} from "../redux/redux-store.ts";




export const setMessageAC = (text:string,name:string,email:string):SetMessageACType =>
    ({type: 'SET_MESSAGE', text,name,email})



const SET_MESSAGE = "SET_MESSAGE"


type MessageType = {
     text: string | null,
    name: string | null,
    email: string | null
}

type InitialStateType = {
    message:Array<MessageType>



}

let initialState:InitialStateType = {
    message: [{
        text:null,
        name: null,
        email: null,

    }]




}

const contactContentReducer = (state = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case SET_MESSAGE: {
            return {
                ...state,
                message: [...state.message, {text: action.text, name: action.name,
                email: action.email}]


            };



        }


        default:
            return state;
    }

}







type SetMessageACType = {
    type: typeof SET_MESSAGE
    text: string,
    name: string,
    email: string
}



type ActionType = SetMessageACType

type DispatchType = Dispatch<ActionType>
type GetStateType = () => AppStateType

export default contactContentReducer;