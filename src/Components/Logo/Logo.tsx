import * as React from "react";
// @ts-ignore
import style from "./Logo.module.css"
// @ts-ignore
import burgerLogo from "./../../assets/images/burgerlogo.png"
import {NavLink} from "react-router-dom";

type PropsType = {

}

const Logo:React.FC<PropsType> = (props) => {
    return (
        <div className={style.logo}>
            <NavLink to={'home'}>
                <img src={burgerLogo}></img>
            </NavLink>

        </div>
    )
}
export default Logo