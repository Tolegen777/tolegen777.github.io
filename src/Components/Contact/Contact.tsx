import * as React from "react";
// @ts-ignore
import style from "./Contact.module.css"
// @ts-ignore
import ContactContent from "../ContactContent/ContactContent.tsx";
// @ts-ignore
import Footer from "../Footer/Footer.tsx";

type PropsType = {

}

const Contact:React.FC<PropsType> = () => {
    return (
        <div className={style.contact}>
            <div className={style.main}>contact</div>
            <ContactContent/>
        </div>

    )
}
export default Contact;