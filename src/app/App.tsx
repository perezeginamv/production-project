import React, { Suspense } from "react";
import './styles/index.scss'
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";




const App = () => {
const {theme, toggleTheme} =useTheme();

    return ( 
        <div className={classNames('app', {}, [theme ])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>            
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>                
                </Routes>
            </Suspense>
        </div>
     );
}
 
export default App;