import './App.css';
import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonsBox from './ButtonsBox';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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