import logo from './logo.svg';
import Proof from './Proof.svg';
import Creators from './Creators.svg';
import About from './About.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import React, {}  from 'react';


function App() {
  return (
    <html>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <img src={About} margin = "10px" width={250} alt="About Button"/>
        <img src={Creators} margin = "10px" width={250} alt="Creator Button"/>
        <img src={Proof} margin = "10px" width={250} alt="Proof Button"/>
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
