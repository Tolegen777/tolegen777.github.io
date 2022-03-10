import * as React from "react";
// @ts-ignore
import style from "./SupportInfo.module.css"

type PropsType = {
    iconUrl:string
    main:string,
    text:string

}

const SupportInfo:React.FC<PropsType> = (props) => {

    return (
        <div className={style.supportInfo}>
            <div className ={style.icon}>
                <img src={props.iconUrl} alt=""/>
            </div>

            <div className={style.info}>
                <div className={style.mainText}>{props.main}</div>
                <div className={style.secondText}>{props.text}</div>
            </div>

        </div>
    )
}
export default SupportInfo