import Proof from './components/buttonImages/Proof.svg';
import Creators from './components/buttonImages/Creators.svg';
import About from './components/buttonImages/About.svg'; 
import Box from '@material-ui/core/Box';

import React from 'react';
import ReactDOM from 'react-dom';


class ButtonsBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fullname: "Home",
    }
  }

  ChangeTextHandler = (f) => {
    this.setState({
        fullname: this.props.txtName,
    })
  }
  
  render() {
    //goal here is to return something out of the main button press functions and contribute it to the textbox
    return ( 
      <>
      <div align = "center">
        <MainButtonPress fileName = {About} txtName = "About"/>
        <MainButtonPress fileName = {Proof} txtName = "Proof"/>
        <MainButtonPress fileName = {Creators} txtName = "Creators"/>
      </div>
        <TextBox desiredTxt = {this.state.fullname}/>
      </>
    );
  }
}

class MainButtonPress extends ButtonsBox {
  constructor(props){
    super(props);
    this.fileName = props.fileName;
    this.txtName = props.txtName;
  }

  render() {
    console.log(this.state.fullname + " from MainButtonPress")
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

class TextBox extends MainButtonPress {
  constructor(props){
      super(props);
      
      this.homeText = <p> Welcome to Sooper! <br></br> <br></br>  All ad revenues generated from this site are donated to charity. <br></br> <br></br> Help us harness the power of the internet for good!</p>
      this.proofText = <p> Proof of donations will be posted here - so you know you're making a difference. </p>
      this.creatorsText = <p> Sooper was created by Anisha, Bo, and Bennett </p>
      this.aboutText = <p> Sooper uses Google Adsense to serve you advertisments, but with a twist! Without any cost to the user, charitable donations are generated.</p>
      
      console.log(props.desiredTxt)
      console.log("re-render")
      if (this.state.fullname === "Home"){
        this.text = this.homeText;
      } else if (this.state.fullname === "Proof"){
        console.log(this.state.fullname + "proof")
        this.text = this.proofText;
      } else if (this.state.fullname === "About"){
        console.log(this.state.fullname)
        this.text = this.aboutText;
      } else if (this.state.fullname === "Creators"){
        console.log(this.state.fullname)
        this.text = this.creatorsText;
      }
  }

  //this can take any props from buttonsbox so figure out a way to find what text is needed, then take the 
  //correct thing from this constructor and plop it into the text

  render() {
    return (
        <Box className = "Box-box" align = "center">
            {this.text}
        </Box>
        );
  } 
}


ReactDOM.render(
  <ButtonsBox />,
  document.getElementById('root')
);

export default ButtonsBox;