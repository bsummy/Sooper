import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Box from '@material-ui/core/Box';
import Proof from '../buttonImages/Proof.svg';



class ProofBox extends Component {
    render(){
        return (
            <Box className = "Box-box" align = "center">
                <img className = "image-format" src = {Proof} alt = "Proof" />
                <p> Proof of donations will be posted here: <br></br> so you know you're making a difference. </p>
            </Box>
        );
    } 
}


ReactDOM.render(
    <ProofBox />,
    document.getElementById('root')
  );

export default ProofBox;