import React from "react";
import { Link } from "react-router-dom";

import './header-component.scss';
import { ReactComponent as Logo } from '../../Assets/crown.svg'

const Header = ()=> (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default Header;