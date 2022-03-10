import * as React from "react";
// @ts-ignore
import style from "./FooterItem.module.css"

type PropsType = {

}

const FooterItem:React.FC<PropsType> = (props) => {
    return (
        <div className={style.parent}>
            <div className={style.main}>New York</div>
            <div className={style.address}>5th flora, 700/D kings road,
                green lane New York-1782
                info@burger.com</div>
            <div className={style.phone}>+10 378 483 6782</div>

        </div>
    )
}



export default FooterItem