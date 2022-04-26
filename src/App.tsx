import './App.css';
import ReactLogo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonsBox from './ButtonsBox';

const logo = require("./logo.svg") as string;

const App = () => {
  return (
    <>
      <header className="App-header">
        <img src={ReactLogo} className="App-logo" alt="logo" />
      </header>
      <ButtonsBox />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;