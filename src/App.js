import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import HeaderMenu from "./HeaderMenu";
import Content from "./Content";

function App() {

    const mainTitle = 'PASV';
    const menuItems = [
        { title: 'Home',
        url: 'www.home.com'},
        { title: 'About',
       url: 'www.bout.com'},
        { title: 'Contacts',
       url: 'www.contacts.home' }
    ]
    const footer = { title: 'Version 1.031 © 2020.',
                     contacts: 'pasv@email.com'};

  return (
    <div className="App">

      <div className="container">

        <Header
            mainTitle = {mainTitle}
            menuItems = {menuItems} />

        <Content/>

        <Footer footer = {footer}/>

      </div>

    </div>
  );
}

export default App;
