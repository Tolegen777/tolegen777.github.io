import * as React from "react";
// @ts-ignore
import style from "./BurgerVideo.module.css"
// @ts-ignore
import videoImage from "./../../assets/images/video.png"
// @ts-ignore
import playButton from "./../../assets/images/play-button.png"

type PropsType = {

}


const BurgerVideo:React.FC<PropsType> = (props) => {
    const localStyle = {
        backgroundImage: 'url(' + videoImage + ')',
    };
    return (
        <div className={style.burgerVideo} >
     <div className={style.parent} style={localStyle}>
         {/*<iframe src="https://www.youtube.com/embed/ZLywUPpuOig"></iframe>*/}
         <div className={style.text}>
             <div className={style.mainText}>BURGER </div>
             <div className={style.mainText}>BACHELOR</div>
             <div className={style.secondText}>How we make delicious Burger</div>
         </div>
         <div className={style.playButton}>
             <a href="https://www.youtube.com/embed/ZLywUPpuOig" target="_blank">
             <img src={playButton} className={style.playBtnImg} alt=""/>
             </a>
         </div>



     </div>



        </div>
    )
}
export default BurgerVideo