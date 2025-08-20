import React from "react";
import './styles/index.scss'
import {  Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/Navbar";


const App = () => {
const {theme, toggleTheme} =useTheme();

    return ( 
        <div className={classNames('app', {}, [theme ])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <NavBar/>         
            <AppRouter/>
        </div>
     );
}
 
export default App;