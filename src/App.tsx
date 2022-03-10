import * as React from 'react'
import './App.css';
// @ts-ignore
import Header from "./Components/Header/Header.tsx";
// @ts-ignore
import Contact from "./Components/Contact/Contact.tsx";
// @ts-ignore
import LogPage from "./Components/LogPage/LogPage.tsx";
// @ts-ignore
import Menu from "./Components/Menu/Menu.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
// @ts-ignore
import NavBar from "./Components/NavBar/NavBar.tsx";
// @ts-ignore
import Footer from "./Components/Footer/Footer.tsx";
// @ts-ignore
import burgerMain from "./assets/images/BurgerMain1.jpg"
import {useSelector} from "react-redux";
// @ts-ignore
import burgerMain2 from "./assets/images/BurgerMain2.png"
// @ts-ignore
import menuImg from "./assets/images/menu.png"
// @ts-ignore
import aboutImg from "./assets/images/about.png"
// @ts-ignore
import contact_blogImg from "./assets/images/contact.png"
// @ts-ignore
import About from "./Components/About/About.tsx";
// @ts-ignore
import Home from "./Components/Home/Home.tsx";
// @ts-ignore
import {getIsMainBackgroundImage} from "./reducers/app-selector.ts";
// @ts-ignore
import LogIntoPage from "./Components/LogIntoPage/LogIntoPage.tsx";

type PropsType = {

}

const App:React.FC<PropsType> = (props) => {
    const location = useLocation();

    let burgerPhoto = burgerMain;
    let isMainBackgroundImage = useSelector(getIsMainBackgroundImage)
    if (isMainBackgroundImage) {
        burgerPhoto = burgerMain2
    }
    let appStyle = {
        backgroundImage: 'url(' + burgerPhoto + ')',
        backgroundSize: '100% 1000px',
        backgroundRepeat: 'no-repeat'
    };

    let getDefaultAppStyle = (burgerPhoto:string) => ({
        backgroundImage: 'url(' + burgerPhoto + ')',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat'
    });

    switch (location.pathname) {
        case '/about':
            burgerPhoto = aboutImg;
            appStyle = getDefaultAppStyle(burgerPhoto)
            break;
        case '/menu':
            burgerPhoto = menuImg;
            appStyle = getDefaultAppStyle(burgerPhoto)
            break;
        case '/blog':
            burgerPhoto = menuImg;
            appStyle = getDefaultAppStyle(burgerPhoto)
            break;
        case '/contact':
            burgerPhoto = contact_blogImg;
            appStyle = getDefaultAppStyle(burgerPhoto)
            break;
    }


    return (
        <div className='app-wrapper' style={appStyle}>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="menu" element={<Menu/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/login" element={<LogPage/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
            <Footer/>

        </div>


    );
}








export default App



