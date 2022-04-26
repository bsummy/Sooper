import ButtonsBox from '../ButtonsBox';
import Box from '@material-ui/core/Box';

import React from 'react';
import ReactDOM from 'react-dom';


class TextBox extends ButtonsBox {
    text: string;
    homeText: any;
    constructor(props){
        super(props);
        this.homeText = props.name;
        /*
        this.homeText = <p> Welcome to Sooper! <br></br> <br></br>  All ad revenues generated from this site are donated to charity. <br></br> <br></br> Help us harness the power of the internet for good!</p>
        this.proofText = <p> Proof of donations will be posted here - so you know you're making a difference. </p>
        this.creatorsText = <p> Sooper was created by Anisha, Bo, and Bennett </p>
        this.aboutText = <p> Sooper uses Google Adsense to serve you advertisments, but with a twist! Without any cost to the user, charitable donations are generated.</p>
        */
        this.text = "hello";
    }

    render() {
        return (
            <Box className = "Box-box" align = "center">
                {this.homeText}
            </Box>
            );
    } 
}

ReactDOM.render(
    <TextBox />,
    document.getElementById('root')
  );

export {TextBox};