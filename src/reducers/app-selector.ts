import {AppStateType} from "../redux/redux-store";

export const getIsMainBackgroundImage = (state:AppStateType) => {
    return state.appPage.isMainBackgroundImage
}

