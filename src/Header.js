import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <div className='header'>

           <Logo mainTitle = {props.mainTitle} />
           <HeaderMenu menuItems = {props.menuItems} />
            {props.menuItems.url}

        </div>
    );
}

export default Header;
