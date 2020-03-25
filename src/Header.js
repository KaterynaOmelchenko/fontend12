import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";
import MenuHeader from "./MenuHeader";

function Header(props) {
    return (
        <div className='header'>

           <Logo mainTitle = {props.mainTitle} />
           <MenuHeader/>

        </div>
    );
}

export default Header;
