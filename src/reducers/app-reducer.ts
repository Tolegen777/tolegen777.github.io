import {Dispatch} from "redux";
import {AppStateType} from "../redux/redux-store";

type SetMainBackgroundImageACType = {
    type: typeof SET_BACKGROUND_IMAGE,
    flagImage: boolean
}

export const setMainBackgroundImageAC = (flagImage:boolean):SetMainBackgroundImageACType => ({type: 'SET_BACKGROUND_IMAGE', flagImage:flagImage})


const SET_BACKGROUND_IMAGE: "SET_BACKGROUND_IMAGE"= "SET_BACKGROUND_IMAGE"

type InitialStateType = {
    isMainBackgroundImage:boolean
}

let initialState:InitialStateType = {
    isMainBackgroundImage: false
}

const appReducer = (state = initialState, action:ActionType):InitialStateType => {
    //debugger;
    switch (action.type) {
        case SET_BACKGROUND_IMAGE: {
            let stateCopy = {...state};
            if (stateCopy.isMainBackgroundImage===action.flagImage){
                action.flagImage = !action.flagImage

            }
            stateCopy.isMainBackgroundImage = action.flagImage;


            return stateCopy;

        }






        default:
            return state;
    }

}

type ActionType = SetMainBackgroundImageACType



export default appReducer;