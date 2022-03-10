
// @ts-ignore
import Logo from "../Logo/Logo.tsx";
// @ts-ignore
import ContactInfo from "../ContactInfo/ContactInfo.tsx";
import * as React from "react";
// @ts-ignore
import style from "./Header.module.css"

type PropsType = {

}

const Header:React.FC<PropsType> = (props) => {
    return (
        <div className={style.wrapper}>
            <Logo />
            <ContactInfo/>
        </div>
    )
}
export default Header