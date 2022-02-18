import logo from './logo.svg';
import Proof from './Proof.svg';
import Creators from './Creators.svg';
import About from './About.svg';
import './App.css';
import mainButtonPress from './mainButtonPress.js';
import Box from '@material-ui/core/Box';
import React from 'react';


function App() {
  return (
    <html>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
      <div id="root">
        <mainButtonPress name = "About">
        <button onClick = {mainButtonPress.name}> <img src={About} width={250} alt= "About Button"/></button> 
        </mainButtonPress>
        <mainButtonPress name = "Creator">
        <button onClick = {mainButtonPress.name}> <img src={Creators} width={250} alt= "Creator Button"/></button>
        </mainButtonPress>
        <mainButtonPress name = "Proof">
        <button onClick = {mainButtonPress}> <img src={Proof} width={250} alt= "Proof Button"/> </button>
        </mainButtonPress>
      </div>
      </body>
      <div align='center'>
        <Box className = "Box-box">
          <p> Welcome to Sooper! <br></br> <br></br>  All ad revanues generated from this site are donated to charity. <br></br> <br></br> Help us harness the power of the internet for good!</p>
        </Box>
      </div>
    </html>
  );
}

export default App;

        /*

        <button onClick = {mainButtonPress.onClick}>  About </button> 
        <button onClick = {mainButtonPress.onClick}> Proof </button>
        <button onClick = {mainButtonPress.onClick}> Creators </button>


        <button onClick = {mainButtonPress}> <img src={About} width={250} alt= "About Button"/></button> 
        <button onClick = {mainButtonPress}> <img src={Creators} width={250} alt= "Creator Button"/></button>
        <button onClick = {mainButtonPress}> <img src={Proof} width={250} alt= "Proof Button"/> </button>
        */
