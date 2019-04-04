import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './fire';
import { getKeyPhrases } from './textapi';
import { Chart } from "react-google-charts";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChatOption from './ChatOption.js';
import Welcome from './Welcome.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {chatoptionbutton: ""}
  }   

  render() {
    const chatoption = (props) => {
      return (
        <ChatOption 
        />
      );
    }

    const welcome = (props) => {
      return (
        <Welcome
        />
      );
    }

    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/ChatOption" component={chatoption}/>
            <Route exact path="/" component={welcome}/>
          </div> 
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
