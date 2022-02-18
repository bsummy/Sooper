import React from 'react';
import ReactDOM from 'react-dom';

class mainButtonPress extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.mainButtonPress = this.mainButtonPress.bind(this);
    /*
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleProofClick = this.handleProofClick.bind(this);
    this.handleCreatorClick = this.handleCreatorClick.bind(this);
    this.state = {boxState: "home"};
    */

    // This binding is necessary to make `this` work in the callback
    //this.mainButtonPress = this.mainButtonPress.bind(this);
  }

  
  mainButtonPress() {
    if (this.name === "About") {
      this.text = "About!"
    } else if (this.name === "Creator") {
      this.text = "Creators!"
    } else if (this.name === "Proof") {
      this.text = "Proof!"
    }
  }
  

  render() {
    //const boxState = this.state.boxState;
    //if (boxState === "home"){
    //  this.text = "hello text"
    //}
    /*if (boxState === "About") {
      text = <about onClick = {this.handleAboutClick}/>
      console.log("hi")
      //figure out what the names of my buttons are

      //button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else if (boxState === "Proof"){
      text = <proof onClick = {this.handleProofClick}/>
      //button = <LoginButton onClick={this.handleLoginClick} />;
    } else if (boxState === "Creator") {
      text = <creator onClick = {this.handleCreatorClick}/>
    }
    */
    return (
      <h1>
        {this.text}
      </h1>

    );
  
  }
}
ReactDOM.render(
  <mainButtonPress />,
  document.getElementById('root')
);

export default mainButtonPress;
/*
<mainButtonPress/>

<button onClick = {mainButtonPress}> <img src={About} width={250} alt= "About Button"/></button> 
<button onClick = {mainButtonPress}> <img src={Creators} width={250} alt= "Creator Button"/></button>
<button onClick = {mainButtonPress}> <img src={Proof} width={250} alt= "Proof Button"/> </button>

  
  handleAboutClick() {
    this.setState({boxState: "About"});
  }

  handleProofClick() {
    this.setState({boxState: "Proof"});
  }

  handleCreatorClick() {
    this.setState({boxState: "Creator"});
  }

*/