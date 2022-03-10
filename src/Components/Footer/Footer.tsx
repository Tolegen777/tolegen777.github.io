import * as React from "react";
// @ts-ignore
import style from './Footer.module.css'
// @ts-ignore
import FooterItem from "../FooterItem/FooterItem.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
// @ts-ignore
import {getUserAuth} from "../../reducers/auth-selector.ts";



type PropsType = {

}

const Footer:React.FC<PropsType> = (props) => {

    let isAuth = useSelector(getUserAuth)
    return (
        <div className={style.footer}>
            <div className={style.secondWrapper}>
                <FooterItem />
                <FooterItem />
                <div className={style.stayConnected}>
                    <div className={style.main}>Stay connected</div>
                    {!isAuth?<NavLink className={style.signIn} to={'/login'}>Sign in</NavLink>:
                    <div className={style.textBurgersCompany}>Burgers company</div>}

                    <div className={style.text}>Stay connect with us to get exclusive offer!</div>
                </div>

            </div>

            <hr/>
            <div className={style.lastInfo}>React-Redux ©2022 | This web site is made with by Tolegen</div>






        </div>
    )
}



export default Footer

