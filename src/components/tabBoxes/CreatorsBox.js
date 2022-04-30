import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Box from '@material-ui/core/Box';
import Creators from '../buttonImages/Creators.svg';



class CreatorsBox extends Component {
    render(){
        return (
            <Box className = "Box-box" align = "center">
                <img className = "image-format" src = {Creators} alt = "Creators" />
                <p> Sooper was created by Anisha, Bo, and Bennett. </p>
            </Box>
        );
    } 
}


ReactDOM.render(
    <CreatorsBox />,
    document.getElementById('root')
  );

export default CreatorsBox;