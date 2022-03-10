import * as React from "react";
import {NavLink} from "react-router-dom";
// @ts-ignore
import style from "./Navbar.module.css"

type PropsType = {

}

const NavBar:React.FC<PropsType> = (props) => {

    return (
        <div>
            <nav>
                <div className={style.wrapper}>
                    <span>
                    <NavLink  to={'/home'} className={({isActive}) => isActive ? style.active : ""}  >Home</NavLink>
                </span>
                    <span>
                    <NavLink to='/menu' className={({isActive}) => isActive ? style.active : ""}>Menu</NavLink>
                </span>
                    <span>
                    <NavLink to='/about' className={({isActive}) => isActive ? style.active : ""}>About</NavLink>
                </span>
                    <span>
                    <NavLink to='/contact' className={({isActive}) => isActive ? style.active : ""}>Contact</NavLink>
                </span>
                </div>


            </nav>
        </div>
    )
}
export default NavBar