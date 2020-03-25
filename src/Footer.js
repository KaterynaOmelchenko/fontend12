import React from 'react';
import logo from './logo.svg';
import './App.css';
import FooterMenu from "./FooterMenu";
import Contacts from "./Contacts";

function Footer(props) {
    return (
        <div className='footer'>


            <FooterMenu footer = {props.footer}/>


        </div>
    );
}

export default Footer;
