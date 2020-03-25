import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenuItems from "./HeaderMenuItems";

function HeaderMenu(props) {

    return (
        <div className='menu'>

            <HeaderMenuItems menuItems = {props.menuItems}/>

        </div>
    );
}

export default HeaderMenu;
