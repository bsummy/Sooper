import './App.css';
import Tabs from "./components/Tabs";
import React from 'react';
import ReactDOM from 'react-dom';
import SooperLogo from './components/buttonImages/SooperLogo.svg';
import ProofBox from './components/tabBoxes/ProofBox';
import CreatorsBox from './components/tabBoxes/CreatorsBox';
import AboutBox from './components/tabBoxes/AboutBox';
import HomeBox from './components/tabBoxes/HomeBox';


function App() {
  return (
    <>
      <header className="App-header">
        <img src={SooperLogo} className="App-logo" alt="logo"/>
      </header>
      <Tabs>
        <div label="Home" text-align = "center">
          <HomeBox/>
        </div> 
        <div label="About">
          <AboutBox/>
        </div>
        <div label="Proof">
          <ProofBox/>
        </div>
        <div label="Creators">
          <CreatorsBox/>
        </div>
      </Tabs>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;