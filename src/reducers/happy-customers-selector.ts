import {AppStateType} from "../redux/redux-store";

export const getEstimateItemsData = (state:AppStateType) => {
    return state.happyCustomers.estimateData
}
