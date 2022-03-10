import * as React from "react";
// @ts-ignore
import style from "./ProductList.module.css"

type PropsType = {
    img:string,
    imgDefault:string,
    name:string,
    description:string,
    price:string
}

const ProductList:React.FC<PropsType> = (props) => {
    let defaultDescription = "Great way to make your business appear trust and relevant."
    return (
        <div className={style.burgerList}>
            <div className={style.parent}>
                <div className={style.image}>
                    <img src={props.img||props.imgDefault} alt="Burger Image"/>
                </div>
                <div className={style.content}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.description}>{props.description||defaultDescription}</div>
                    <div className={style.price}>{props.price}</div>
                </div>
            </div>



        </div>
    )
}
export default ProductList