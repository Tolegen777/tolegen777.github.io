import * as React from 'react'
import {useDispatch} from "react-redux";
// @ts-ignore
import {registerPostThunk, registerThunk} from "../reducers/auth-reducer.ts";



let Test = () => {
    let dispatch = useDispatch();
    let funk:any = () => {
        dispatch(registerThunk())
    }
    let funk2:any = () => {
        dispatch(registerPostThunk())
    }
    // @ts-ignore
    return (
        <div>
            <button onClick={funk}>ok</button>
            <button onClick={funk2}>ok2</button>
        </div>
    )
 }

 export default Test