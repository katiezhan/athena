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
    return (
      <div>
        <div class="row" style={{backgroundColor: "#048D98",  "top":"0"}}>
          <div class="container col-md-2" style={{"padding": "2%", "color":"#ffffff", fontFamily: "Roboto"}}>
            <img src="logobright.png" style={{"width":"12%", "height":"12%"}}/>
              <div class="vertical-center" style={{fontSize: "25px"}}>
                AthenaAI
                <br/>
                  <div style={{"font-size": "13px"}}>
                    Student
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
