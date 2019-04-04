import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './fire';
import { getKeyPhrases } from './textapi';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {answerOne:"", submitOne:false, answerTwo:"", submitTwo: false, solutionOne:["ask", "research", "google"], markOne:0}
      this.handleQuestionOne = this.handleQuestionOne.bind(this)
      this.handleSubmitOne = this.handleSubmitOne.bind(this)
      this.handleQuestionTwo = this.handleQuestionTwo.bind(this)
      this.handleSubmitTwo = this.handleSubmitTwo.bind(this)
  }   

  handleQuestionOne(e){
    this.setState({answerOne: e.target.value})
    console.log(this.state.answerOne)
    console.log(this.state.submitOne)
  }

  handleSubmitOne(){
    this.setState({submitOne: true})
    console.log(this.state.markOne)
    console.log(this.state.submitOne)
    getKeyPhrases(this.state.answerOne, this.state.solutionOne).then((result) => {
        this.state.markOne = result
    })
  }

  handleQuestionTwo(e){
    this.setState({answerTwo: e.target.value})
    console.log(this.state.markOne)
    console.log(this.state.answerOne)
    console.log(this.state.submitOne)
    console.log(this.state.answerTwo)
    console.log(this.state.submitTwo)
  }

  handleSubmitTwo(){
    this.setState({submitTwo: true})
    console.log(this.state.submitTwo)
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
        {this.state.submitOne == false ?
          <div class = "welcome-body">
            <div class ="form-group">
              <div class = "row">
                What is question one?
              </div>
              <div class = "row">
                <div class ="col-10" style={{padding: "2%"}}>
                  <input class="form-control" id="answerOne" placeholder="Enter your answer here" onChange={this.handleQuestionOne} value={this.state.answerOne} style ={{padding: "1%"}} required/>
                </div>
              </div>
              <button id="submit-button" class="btn" onClick={this.handleSubmitOne} style={{align: 'center', color: "#048D98"}} type="submit">Next</button>
            </div>
          </div>
        :
            <div class = "welcome-body">
              <div class ="form-group">
                Success!
                <div class = "row">
                   What is question two?
                </div>
               <div class = "row">
                 <div class ="col-10" style={{padding: "2%"}}>
                   <input class="form-control" id="answerOne" placeholder="Enter your answer here" onChange={this.handleQuestionTwo} value={this.state.answerTwo} style ={{padding: "1%"}} required/>
                 </div>
               </div>
               <button id="submit-button-2" class="btn" onClick={this.handleSubmitTwo} style={{align: 'center', color: "#048D98"}} type="submit">Next</button>
             </div>
           </div>
        } 
      </div>
    );
  }
}

export default App;
