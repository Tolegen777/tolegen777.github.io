import * as React from "react";
import { useState} from "react";
// @ts-ignore
import style from "./MenuLists.module.css"
import 'antd/dist/antd.css';
// @ts-ignore
import ProductList from "../ProductList/ProductList.tsx";
import {useSelector} from "react-redux";
// @ts-ignore
import {getBurgers, getDrinks, getElseThings} from "../../reducers/menuList-selector.ts";
// @ts-ignore
import burgerMenuImg from "./../../assets/images/1.png"
// @ts-ignore
import drinkImg from "./../../assets/images/drink.png"
// @ts-ignore
import elseThingsImg from "./../../assets/images/else.jpg"

type PropsType = {

}

const MenuLists:React.FC<PropsType> = React.memo((props) => {


    let burgersData = useSelector(getBurgers);
    let drinksData = useSelector(getDrinks);
    let elseThingsData = useSelector(getElseThings);
    //const elementsSize = useSelector(getElementsSize)


    // let itemsCount = Math.ceil(burgersData.length/elementsSize)
    // let count = 0;
    // let [itemsCount,setItemsCount] = useState(4)


    // const [loaded, setLoaded] = useState(false)




    const setProductElements = (product, imgDefault) => {
        return (product.map(items => {
            // if (count<itemsCount){
            //     count++;
                return (
                    <ProductList
                        key={items.id}
                        name={items.name}
                        description={items.description}
                        price={items.price}
                        img={items.img}
                        imgDefault={imgDefault}
                    />
                )

            }


        //}
        ))

    }

    let burgers = setProductElements(burgersData, burgerMenuImg)
    let drinks = setProductElements(drinksData, drinkImg);
    let elseThings = setProductElements(elseThingsData, elseThingsImg);

    let [product, setProduct] = useState(burgers);
    // useEffect(() => {
    //     if (loaded) return ;
    //     //получение data
    //     setProduct(burgers);
    //     setLoaded(true)
    // }, [loaded])
    const [active, setActive] = useState("1");

    let chooseBurger = (e) => {
        setProduct(burgers);
        setActive(e.target.id);
    }
    let chooseDrink = (e) => {
        setProduct(drinks);
        setActive(e.target.id);
    }
    let chooseElseThing = (e) => {
        setProduct(elseThings);
        setActive(e.target.id);
    }
    let styleD = {
        backgroundColor: '#f0542c',
        color: 'white'
    }
    // const showProducts = (e) => {
    //     setProduct(e.target.resource);
    //     console.log(product);
    //     setItemsCount(itemsCount+=4);
    //     console.log(e.target.resource);
    //
    //
    // }

    return (
        <div className={style.menuLists}>
            <div className={style.mainText}>
                <div className={style.burgerMenu}>Burger Menu</div>
                <div className={style.text}>Best ever burgers</div>
                <div className={style.productButtons}>
                    <button onClick={chooseBurger} id={"1"} style={active === "1" ? styleD : null}>Burgers</button>
                    <button onClick={chooseDrink} id={"2"} style={active === "2" ? styleD : null}>Drinks</button>
                    <button onClick={chooseElseThing} id={"3"} style={active === "3" ? styleD : null}>Else</button>
                </div>
            </div>


            <div className={style.burgersStyle}>
                {product}
            </div>
            {/*<div className={style.moreItems}>*/}

            {/*    <button onClick={showProducts} resource={product}>More Items</button>*/}
            {/*</div>*/}


        </div>
    )
})

export default MenuLists