import logo from './logo.svg';
import Proof from './Proof.svg';
import Creators from './Creators.svg';
import About from './About.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import React, {}  from 'react';


function App() {
  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={About} width={300} />
        <img src={Creators} width={300} />
        <img src={Proof} width={300} />
      
        <Box bgcolor = "#EEE1C6" width={400} height={330} border='10px solid' align='center'>
          <p> Welcome to Sooper! All ad revanues generated from this site are donated directly to charity. Help us harness the power of the internet for good!</p>
        </Box>
      </header>
    </div>
  );
}

export default App;
