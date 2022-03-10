

type ChangeEstimateDataACType = {
     type: typeof CHANGE_ESTIMATE_DATA,
     likedItemsCount: number
 }
export let changeEstimateDataAC = (likedItemsCount:number):ChangeEstimateDataACType => ({type:CHANGE_ESTIMATE_DATA,likedItemsCount})


const CHANGE_ESTIMATE_DATA = "CHANGE_ESTIMATE_DATA"

let initialState = {
    estimateData: [1,1,1,0,0] as Array<number>
}

type InitialStateType = typeof initialState


const happyCustomersReducer = (state = initialState,action:ActionType):InitialStateType => {
    // debugger
    switch (action.type) {
        case CHANGE_ESTIMATE_DATA: {
            let stateCopy = {...state};
            stateCopy.estimateData = [...state.estimateData];
            for (let i =0;i<action.likedItemsCount;i++){
                stateCopy.estimateData[i] = 1;
                console.log(stateCopy.estimateData.length);
            }
            console.log(stateCopy.estimateData)
            return stateCopy;

        }

        default: return state
    }
}

type ActionType = ChangeEstimateDataACType



export default happyCustomersReducer