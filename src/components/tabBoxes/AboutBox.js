import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Box from '@material-ui/core/Box';
import About from '../buttonImages/About.svg'; 




class AboutBox extends Component {
    render(){
        return (
            <Box className = "Box-box" align = "center">
                <img className = "image-format" src = {About} alt = "About" />
                <p> Sooper uses Google Adsense to serve you advertisments, but with a twist! <br></br> <br></br> With no cost to the user, charitable donations are generated.</p>
            </Box>
        );
    } 
}


ReactDOM.render(
    <AboutBox />,
    document.getElementById('root')
  );

export default AboutBox;