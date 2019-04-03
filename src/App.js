import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './fire'

class App extends Component {
constructor(props){
  super(props)
  this.state = {answerOne:""}
    this.handleQuestionOne = this.handleQuestionOne.bind(this)
}

  handleQuestionOne(e){
    this.setState({answerOne: e.target.value})
  }

  handleSubmitOne(e){
    e.preventdefault()
    firebase.database().ref('questionOne/').set({
      answer: this.state.answerOne
    })
  }

  render() {
    return (
      <div className="App" style = {{fontFamily: "Roboto"}}>
        <div class="row" style={{"background-color": "#048D98", "height": "80%", "top":"0"}}>
          <div class="container col-md-2" style={{"padding": "1%", "color":"#ffffff", "font-family": "Roboto"}}>
            <img src="logobright.png" style={{"width":"12%", "height":"12%"}}/>
              <div class="vertical-center" style={{"font-size": "25px"}}>
                AthenaAI
                <br/>
                  <div style={{"font-size": "13px"}}>
                    Student
                  </div>
              </div>
          </div>
        </div>
        <div class = "welcome-body">
          <div class ="form-group">
            <div class = "row">
              What is question one?
            </div>
            <div class = "row">
              <div class ="col-10">
                <input class="form-control" id="answerOne" placeholder="Enter your answer here" onChange={this.handleQuestionOne} value={this.state.answerOne} required/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
