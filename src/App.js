import './App.css';
import Tabs from "./components/Tabs";
import React from 'react';
import ReactDOM from 'react-dom';
import SooperLogo from './components/buttonImages/SooperLogo.svg';
import Box from '@material-ui/core/Box';
import Proof from './components/buttonImages/Proof.svg';
import Creators from './components/buttonImages/Creators.svg';
import About from './components/buttonImages/About.svg'; 


function App() {
  return (
    <>
    <div>
      <header className="App-header">
        <img src={SooperLogo} className="App-logo" alt="logo"/>
      </header>
      <Tabs >
      <div label="Home" text-align = "center">
      <Box className = "Box-box" align = "center">
       <p> <b> Welcome to Sooper! </b> <br></br> <br></br>  All revenues generated from this site are donated to charity. <br></br> <br></br> Help us harness the power of the internet for good!</p>
      </Box>
        </div>
        <div label="About">
      <Box className = "Box-box" align = "center">
      <img className = "image-format" src = {About} alt = "About" />
        <p> Sooper uses Google Adsense to serve you advertisments, but with a twist! <br></br> <br></br> With no cost to the user, charitable donations are generated.</p>
      </Box>
        </div>
        <div label="Proof">
        <Box className = "Box-box" align = "center">
        <img className = "image-format" src = {Proof} alt = "Proof" />
        <p> Proof of donations will be posted here: <br></br> so you know you're making a difference. </p>
      </Box>
        </div>
        <div label="Creators">
        <Box className = "Box-box" align = "center">
        <img className = "image-format" src = {Creators} alt = "Creators" />
        <p> Sooper was created by Anisha, Bo, and Bennett. </p>
        </Box>
        </div>
      </Tabs>
    </div>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;