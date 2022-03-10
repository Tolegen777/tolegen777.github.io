type InitialStateType = {

}

let initialState:InitialStateType = {

}

const homeReducer = (state = initialState, action):InitialStateType => {
    // debugger;
    switch (action.type) {

        default:
            return state;
    }

}

export default homeReducer;