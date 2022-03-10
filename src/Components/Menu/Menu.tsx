import * as React from "react";
// @ts-ignore
import style from "./Menu.module.css"
// @ts-ignore
import OrderNow from "../OrderNow/OrderNow.tsx";
// @ts-ignore
import HappyCustomers from "../HappyCustomers/HappyCustomers.tsx";
import MenuLists from "../MenuLists/MenuLists.tsx";

type PropsType = {

}

const Menu:React.FC<PropsType> = (props) => {
    return (
        <div className={style.menu}>
            <div className={style.menuMain}>MENU</div>
            <MenuLists />
            <OrderNow/>
            <HappyCustomers/>
        </div>
    )
}



export default Menu