import * as React from "react";
// @ts-ignore
import style from "./LogPage.module.css"
// @ts-ignore
import LogIntoPage from "../LogIntoPage/LogIntoPage.tsx";


type PropsType = {

}

const LogPage:React.FC<PropsType> = (props) => {
    return (
        <div>
            <div className={style.main}>Login</div>
            <LogIntoPage/>
        </div>
    )
}
export default LogPage;