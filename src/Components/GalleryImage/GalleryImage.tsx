import * as React from "react";
// @ts-ignore
import style from "./HappyCustomers.module.css"

type PropsType = {
    presidentBurgerImg: string
}

const GalleryImage:React.FC<PropsType> = (props) => {
    return (
        <div>
            <div>Gallery Image</div>
            <div>OUR GALLERY</div>
            <div>gallery photos</div>

        </div>
    )
}
export default GalleryImage