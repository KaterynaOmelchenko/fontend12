import React from 'react';
import logo from './logo.svg';
import './App.css';

function Contacts(props) {
    return (
        <div className='contacts'>

            {props.footer.contacts}

        </div>
    );
}

export default Contacts;
