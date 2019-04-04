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
      <div class = "App" style = {{fontFamily: "Roboto", overflowX: "hidden"}}> 
        <div class="row" style={{backgroundColor: "#048D98",  "top":"0"}}>
          <div class="container col-md-2" style={{"padding": "1%", "color":"#ffffff", fontFamily: "Roboto"}}>
            <img src="logobright.png" style={{"width":"12%", "height":"12%"}}/>
            
              <div class="vertical-center" style={{fontSize: "25px", fontWeight: "bold"}}>
                AthenaAI
                <br/>
                  <div style={{"font-size": "13px"}}>
                    Student
                  </div>
              </div>

          </div>
          <div class = "container col-md-6"></div>
          <div class = "container col-md-2" style={{paddingTop: "3%", fontSize: "20px", fontWeight: "bold"}}>
           <label style={{paddingTop: "3%", fontSize: "20px", fontWeight: "bold", color: "white"}}>Learn More </label> 
          </div>
          <div class = "container col-md-2" style={{paddingTop: "3%", fontSize: "20px", fontWeight: "bold"}}>
            <label style={{paddingTop: "3%", fontSize: "20px", fontWeight: "bold", color: "white"}}>Employers </label> 
          </div>
        </div>

        <div class="webpage-container container-fluid">
            <div>
                <br/>
                <br/>
                <img class="center homepage-logo" src="athenawebicon.png"/>
            </div>
            <br/>
            <br/>
            <h1>AthenaAI</h1>
            <h2>Welcome to AthenaAI Student, your interview chatbot. Select a chatbot option to start.</h2>

      
      <div class="center row" style={{"position": "relative", "height":"420px", "margin":"0 auto", "margin-top":"3%", "background-color": "#EAEAEA"}}>
        <div class="col-md-2">
        </div>

        <div class="outline-box col-md-4">
          <h1>Chat Option</h1>
          <br/>
          <h2>Practice your technical interviews with the AthenaAI Digital Chatbot</h2>
          <img class="center "src="chatoption.png" style={{"width":"60%"}}/>
          <button class="button button1 center" style = {{backgroundColor: "#048D98"}}>
            <Link to="/chatoption" style={{ margin: '5px', color: "white", fontWeight: "bold"}}>Start Chat</Link>
          </button>
        </div>

        <div class="col-md-1">
        </div>

        <div class="outline-box col-md-4">
          <h1>Voice Option</h1>
          <br/>
          <h2>Practice your soft-skill interviews with the AthenaAI Digital Chatbot</h2>
          <img class="center" src="voiceoption.png" style={{"width":"60%"}}/>
          <button class="button button1 center" style = {{backgroundColor: "#048D98"}}><label style={{color: "white"}}>Start Chat</label></button>
        </div>

        <div class="col-md-2">
        </div>
      </div>


    </div>
      </div>
    );
  }
}

export default Welcome;
