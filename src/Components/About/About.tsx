import * as React from "react";
// @ts-ignore
import style from "./About.module.css"
// @ts-ignore
import AboutItem from "../AboutItem/AboutItem.tsx";
// @ts-ignore
import HappyCustomers from "../HappyCustomers/HappyCustomers.tsx";

type PropsType = {

}

const About:React.FC<PropsType> = (props) => {
    return (
        <div className={style.about}>
            <div className={style.aboutMain}>About</div>
            <AboutItem/>
            <HappyCustomers/>
        </div>
    )
}



export default About