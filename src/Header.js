import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";
import MenuHeader from "./MenuHeader";

function Header() {
    return (
        <div className='header'>

           <Logo/>
           <MenuHeader/>

        </div>
    );
}

export default Header;
