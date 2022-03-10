import * as React from "react";
// @ts-ignore
import style from "./Home.module.css"
// @ts-ignore
import OrderNow from "../OrderNow/OrderNow.tsx";
// @ts-ignore
import BurgerVideo from "../BurgerVideo/BurgerVideo.tsx";
// @ts-ignore
import HappyCustomers from "../HappyCustomers/HappyCustomers.tsx";

import {LeftOutlined, RightOutlined} from "@ant-design/icons";
// @ts-ignore
import bigDealIcon from "./../../assets/images/iconDeal.png"
// @ts-ignore
import AboutItem from "../AboutItem/AboutItem.tsx";
import {useDispatch} from "react-redux";
// @ts-ignore
import {setMainBackgroundImageAC} from "../../reducers/app-reducer.ts";
// @ts-ignore
import MenuLists from "../MenuLists/MenuLists.tsx";

type PropsType = {

}

const Home:React.FC<PropsType> = (props) => {
    let dispatch = useDispatch()

    // debugger;
    let changeAppImg = () => {

        dispatch(setMainBackgroundImageAC(true))

    }

    return (
        <>
        <div className={style.home}>
            <button onClick={changeAppImg} className={style.rightBtn}><RightOutlined className={style.icon}/></button>
            <button onClick={changeAppImg} className={style.leftBtn}><LeftOutlined className={style.icon}/></button>
            <div className={style.mainText}>
                <img src={bigDealIcon} alt=""/>
                <span className={style.bigDeal}>Big deal</span>
                <div className={style.mainBurgerText}>

                    <div>Burger</div>
                    <div>Bachelor</div>
                </div>
                <div className={style.mexicanText}>Mexican </div>
            </div>

        </div>
            <MenuLists />
            <OrderNow/>
            <AboutItem/>
            <BurgerVideo/>
            <HappyCustomers/>
            </>
    )
}


 export default Home


