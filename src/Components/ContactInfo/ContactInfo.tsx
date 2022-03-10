import * as React from "react";
// @ts-ignore
import style from "./ContactInfo.module.css"
// @ts-ignore
import instagram from "./../../assets/images/instagram.png"
// @ts-ignore
import twitter from "./../../assets/images/twitter (1).png"
// @ts-ignore
import facebook from "./../../assets/images/facebook (1).png"
// @ts-ignore
import telegram from "./../../assets/images/telegram (1).png"
// @ts-ignore
import LoginPage from "../LoginPage/LoginPage.tsx";


type PropsType = {

}

const ContactInfo:React.FC<PropsType> = (props) => {
    return (
        <div className={style.contactInfo}>

            <a href="https://www.google.ru/" target="_blank"><img src={instagram} alt="instagram"/></a>
            <a href="https://www.google.ru/" target="_blank"><img src={twitter} alt="twitter"/></a>
            <a href="https://www.google.ru/" target="_blank"><img src={facebook} alt="facebook"/></a>
            <a href="https://www.google.ru/" target="_blank"><img src={telegram} alt="telegram"/></a>
            <span><LoginPage/></span>


            {/*<span className={style.loginSpan}>*/}
            {/*    */}
            {/*</span>*/}


        </div>
    )
}
export default ContactInfo;