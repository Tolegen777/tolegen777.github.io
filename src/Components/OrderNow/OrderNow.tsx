import * as React from "react";
// @ts-ignore
import style from "./OrderNow.module.css"


// @ts-ignore
import OrderNowItem from "../OrderNowItem/OrderNowItem.tsx";
// @ts-ignore
import presidentBurgerImg1 from "./../../assets/images/presidentBurger1.png"
// @ts-ignore
import presidentBurgerImg2 from "./../../assets/images/presidentBurger2.png"

type PropsType = {

}

const OrderNow:React.FC<PropsType> = (props) => {

    return (
        <div className={style.parent}>
            <div className={style.orderNow}>
                <OrderNowItem presidentBurgerImg = {presidentBurgerImg1}/>
                <OrderNowItem presidentBurgerImg = {presidentBurgerImg2}/>
            </div>
        </div>

    )
}

export default OrderNow;