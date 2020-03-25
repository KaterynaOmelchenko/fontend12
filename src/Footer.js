import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuFooter from "./MenuFooter";
import Contacts from "./Contacts";

function Footer() {
    return (
        <div className='footer'>

            <MenuFooter/>
            <Contacts/>

        </div>
    );
}

export default Footer;
