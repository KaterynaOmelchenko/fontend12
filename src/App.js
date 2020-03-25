import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import Content from "./Content";

function App() {
  return (
    <div className="App">

      <div className="container">

        <Header/>

        <Content/>

        <Footer/>

      </div>

    </div>
  );
}

export default App;
