import React from 'react';
import logo from './logo.svg';
import './App.css';

function HeaderMenuItems(props) {

    return (
        <div className='menu'>

      {props.menuItems.map((el, i) => <li key = {i}  >  {el.title} </li> )}

        </div>
    );
}

export default HeaderMenuItems;
