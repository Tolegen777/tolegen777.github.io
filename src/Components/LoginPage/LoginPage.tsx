import * as React from "react";
import {useEffect} from "react";
// @ts-ignore
import style from "./LoginPage.module.css"


// @ts-ignore
import {getAuthDataThunk, logoutThunk} from "../../reducers/auth-reducer.ts";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {getAuthLogin, getUserAuth} from "../../reducers/auth-selector.ts";

import {NavLink} from "react-router-dom";

type PropsType = {

}

const LoginPage:React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    let userLoginName = useSelector(getAuthLogin);
    const isAuth = useSelector(getUserAuth);

    const onLogoutClick = () => {
       dispatch(logoutThunk())
    }


    useEffect(() => {

        dispatch(getAuthDataThunk());

    }, [getAuthDataThunk])

    // useEffect(
    //     () => {
    //         onLogoutClick(logoutThunk());
    //
    //     }, [logoutThunk])

    // let usersLetter = [];
    // if (loading===true) {
    //
    //     for (let i = 0;i<userLoginName.length;i++){
    //         // usersLetter.push
    //         // console.log(userLoginName[i].valueOf())
    //         console.log("kk")
    //     }
    // }
    let userFirstLetter = ''
    if (userLoginName) {
        // @ts-ignore
        /// ! userLoginName is unknown
        userFirstLetter = userLoginName.charAt(0)
    }


    return (
        <>
            <div className={style.loginPage}>
                {isAuth ?
                    <>
                        <div className={style.userIcon}>{userFirstLetter}</div>
                        <button className={style.logout} onClick={onLogoutClick}>Logout</button>
                    </>
                    :
                    <NavLink to={"/login"}>
                        <div className={style.text}>Login</div>
                    </NavLink>}

            </div>

        </>


    )
}
export default LoginPage