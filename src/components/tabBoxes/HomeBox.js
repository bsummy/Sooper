import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Box from '@material-ui/core/Box';


class HomeBox extends Component {
    render(){
        return (
            <Box className = "Box-box" align = "center">
                <p> <b> Welcome to Sooper! </b> <br/> <br/> All revenues generated from this site are donated to charity. <br></br> <br></br> Help us harness the power of the internet for good!</p>
            </Box>
        );
    } 
}


ReactDOM.render(
    <HomeBox />,
    document.getElementById('root')
  );

export default HomeBox;