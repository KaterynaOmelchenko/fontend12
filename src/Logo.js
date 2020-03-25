import React from 'react';
import logo from './logo.svg';
import './App.css';

function Logo(props) {
    return (
        <div className='logo'>

            {props.mainTitle}

        </div>
    );
}

export default Logo;
