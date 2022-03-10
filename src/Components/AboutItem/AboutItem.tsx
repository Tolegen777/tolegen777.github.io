import * as React from "react";
// @ts-ignore
import style from "./AboutItem.module.css"
// @ts-ignore
import about1 from "./../../assets/images/about1.png"
// @ts-ignore
import about2 from "./../../assets/images/about2.png"

type PropsType = {

}

const AboutItem:React.FC<PropsType> = (props) => {
    return (
        <div className={style.about}>
            <div className={style.parent}>
                <img className={style.img1} src={about1} alt="about1"/>
                <img className={style.img2} src={about2} alt="about2"/>
            </div>
            <div className={style.parentText}>
                <div className={style.aboutText}>about us</div>
                <div className={style.bestBurgerText}>
                    <div>BEST BURGER</div>
                    <div>IN YOUR CITY</div>
                </div>
                <div className={style.textContent}>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable. If you are going to use a passage
                    of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle
                    of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence structures, to generate
                </div>
            </div>
        </div>
    )
}
export default AboutItem