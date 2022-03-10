import * as React from "react";
// @ts-ignore
import style from "./HappyCustomers.module.css"
// @ts-ignore
import peopleImage from "./../../assets/images/people1.png"
// @ts-ignore
import unLikedStar from "../../assets/images/star.png"
// @ts-ignore
import likedStar from "./../../assets/images/likedStar.png"
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import {getEstimateItemsData} from "../../reducers/happy-customers-selector.ts";
// @ts-ignore
import {changeEstimateDataAC} from "../../reducers/happy-customers-reducer.ts";

type PropsType = {

}

const HappyCustomers:React.FC<PropsType> = (props) => {

    let estimateItemsData = useSelector(getEstimateItemsData);
    let dispatch = useDispatch();

    let likeItem = () => {

    }



    return (
        <div className={style.happyCustomers}>
            <div className={style.main}>Testimonials</div>
            <div className={style.secondText}>HAPPY CUSTOMERS</div>
            <div className={style.text}>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
                sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed
                neque.</div>
            <div className={style.peopleProfile}>

                <img src={peopleImage} alt=""/>
                <div>Arafath Hosein</div>
                <div className={style.stars}>

                    {
                        // @ts-ignore
                        estimateItemsData.map((items,index) =>{
                        return(<img key={index} src={items===1?likedStar:unLikedStar} id={index+1}
                            // @ts-ignore
                        onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(changeEstimateDataAC(e.target.id))

                        }}
                        />)
                    }

                     )}

                </div>

            </div>
            <div>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
        </div>
    )
}
export default HappyCustomers