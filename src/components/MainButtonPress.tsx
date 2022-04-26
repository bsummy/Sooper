import ButtonsBox from '../ButtonsBox';
import React from 'react';
import ReactDOM from 'react-dom';

class MainButtonPress extends ButtonsBox{
  fileName: string;
  constructor(props: { fileName: string; }){

    super(props);
    this.fileName = props.fileName;
  }

  render() {
    return ( 
      <>
      <div className = 'actions'>
        <button className = "btn" onClick = {this.ChangeTextHandler}> 
          <img src={this.fileName} width = {250} alt = ""/>
        </button>
      </div>
      </>
    );
  }
}

ReactDOM.render(
  <MainButtonPress />,
  document.getElementById('root')
);
  
export {MainButtonPress};
