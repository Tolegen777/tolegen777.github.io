import * as React from 'react'
// @ts-ignore
import style from './OrderNowItem.module.css'
import {useSelector} from "react-redux";
// @ts-ignore
import {getBurgers} from "../../reducers/menuList-selector.ts";

type PropsType = {
    presidentBurgerImg: string
}

const OrderNowItem:React.FC<PropsType> = (props) => {

    const orderNowStyle = {
        backgroundImage: 'url(' + props.presidentBurgerImg + ')',
    };

    let orderBurgers = useSelector(getBurgers)

    return(
        <div className={style.orderNowItem } >
            <div className={style.elements} style={orderNowStyle}>

            </div>
            <div className={style.content}>
                <div className={style.price}>{orderBurgers[0].price}</div>
                <div className={style.name}>{orderBurgers[0].name}</div>
                <div className={style.description}>{orderBurgers[0].description}</div>
                {/*<button>Order Now</button>*/}
            </div>

        </div>
    )
}

export default OrderNowItem