import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return ( 
        <div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </div>
     );
}
 