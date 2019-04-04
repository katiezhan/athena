import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './fire';
import { getKeyPhrases } from './textapi';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {answerOne:"", submitOne:false, answerTwo:"", submitTwo: false, solutionOne:["ask", "research", "google"], markOne:0, solutionTwo:["civil", "respect", "open-minded"], markTwo:0, answerThree:"", submitThree:false}
      this.handleQuestionOne = this.handleQuestionOne.bind(this)
      this.handleSubmitOne = this.handleSubmitOne.bind(this)
      this.handleQuestionTwo = this.handleQuestionTwo.bind(this)
      this.handleSubmitTwo = this.handleSubmitTwo.bind(this)
      this.handleQuestionThree = this.handleQuestionThree.bind(this)
      this.handleSubmitThree = this.handleSubmitThree.bind(this)
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
    getKeyPhrases(this.state.answerTwo, this.state.solutionTwo).then((result) => {
        this.state.markTwo = result
    })
  }

  handleQuestionThree(e){
    this.setState({answerThree: e.target.value})
    console.log(this.state.submitThree)
  }

  handleSubmitThree(){
    this.setState({submitThree: true})
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
                If given minimal instruction on a certain task, how would you proceed?
              </div>
              <div class = "row">
                <div class ="col-10" style={{padding: "2%"}}>
                  <input class="form-control" id="answerOne" placeholder="Enter your answer here" onChange={this.handleQuestionOne} value={this.state.answerOne} style ={{padding: "1%"}} required/>
                </div>
              </div>
              <button id="submit-button" class="btn" onClick={this.handleSubmitOne} style={{align: 'center', color: "#048D98"}} type="submit">Submit</button>
            </div>
          </div>
        :
          <div>
            {this.state.submitTwo == false ?
              <div>
                <div class = "welcome-body">
                  <div class ="form-group">
                    Success!
                      <div class = "row">
                        Tell me about a time you had to work with a colleague you did not get along with. What did you do?
                      </div>
                      <div class = "row">
                        <div class ="col-10" style={{padding: "2%"}}>
                          <input class="form-control" id="answerTwo" placeholder="Enter your answer here" onChange={this.handleQuestionTwo} value={this.state.answerTwo} style ={{padding: "1%"}} required/>
                        </div>
                      </div>
                      <button id="submit-button-2" class="btn" onClick={this.handleSubmitTwo} style={{align: 'center', color: "#048D98"}} type="submit">Submit</button>
                  </div>
                </div>
              </div>
            :
              <div>
                {this.state.submitThree == false ?
                  <div>
                    <div class = "welcome-body">
                      <div class ="form-group">
                        Success!
                          <div class = "row">
                            What is question three?
                          </div>
                          <div class = "row">
                            <div class ="col-10" style={{padding: "2%"}}>
                              <input class="form-control" id="answerThree" placeholder="Enter your answer here" onChange={this.handleQuestionThree} value={this.state.answerThree} style ={{padding: "1%"}} required/>
                            </div>
                          </div>
                          <button id="submit-button-2" class="btn" onClick={this.handleSubmitThree} style={{align: 'center', color: "#048D98"}} type="submit">Submit</button>
                      </div>
                    </div>
                  </div>

                :

                  <div>
                    Thank you! 
                    Here are your results:
                  </div>

                }
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
