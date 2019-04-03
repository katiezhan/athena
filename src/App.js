import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="row" style="background-color: #048D98; height: 80%; width:100%; top:0;">
          <div class="container col-md-4" style="padding: 2%; color:#ffffff; font-family:roboto;">
            <img src="logobright.png" style="width:12%; height:12%;"/>
              <div class="vertical-center" style="font-size: 25px;">
                AthenaAI
                <br/>
                  <div style="font-size: 13px;">
                    Student
                  </div>
              </div>
          </div>


          <div class="container" style="padding-left:5%; color:#ffffff; font-family:roboto;">
            <div class="vertical-center" style="font-size: 15px;">
              Learn More
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
