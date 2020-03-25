import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from "./Contacts";

function FooterMenu(props) {
    return (
        <div className='menu'>

            {props.footer.title}

            <Contacts footer={props.footer}/>

        </div>
    );
}

export default FooterMenu;
