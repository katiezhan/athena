import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './fire';
import { getKeyPhrases } from './textapi';
import { Chart } from "react-google-charts";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChatOption from './ChatOption.js';
import App from './App.js';

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {chatoptionbutton: ""}
  }   

  render() {
    const chatoption = (props) => {
      return (
        <ChatOption 
          chatoptionbutton={this.state.chatoptionbutton}
        />
      );
    }

    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/ChatOption" component={chatoption}/>
          </div> 
        </BrowserRouter>  
      </div>
    );
  }
}

export default Welcome;
