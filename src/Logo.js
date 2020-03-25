import React from 'react';
import logo from './logo.svg';
import slackLogo from './slack-logo.png';
import './App.css';


function Logo(props) {
    return (
        <div className='logo'>

            <img src ={logo}/>

            {props.mainTitle}

        </div>
    );
}

export default Logo;
