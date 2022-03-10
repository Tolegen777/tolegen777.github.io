
import {applyMiddleware, combineReducers, createStore} from "redux";

// @ts-ignore
import appReducer from "../reducers/app-reducer.ts";

// @ts-ignore
import homeReducer from "../reducers/home-reducer.ts";

// @ts-ignore
import menuListsReducer from "../reducers/menuLists-reducer.ts";

// @ts-ignore
import authReducer from "../reducers/auth-reducer.ts";

import thunkMiddleware from "redux-thunk"

// @ts-ignore
import happyCustomersReducer from "../reducers/happy-customers-reducer.ts";
// @ts-ignore
import contactContentReducer from "../reducers/contactContent-reducer.ts";

let rootReducer = combineReducers({
    appPage:appReducer,
    homePage:homeReducer,
    menuLists:menuListsReducer,
    happyCustomers:happyCustomersReducer,
    auth:authReducer,
    contactContent:contactContentReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;

// @ts-ignore
window.store = store;

