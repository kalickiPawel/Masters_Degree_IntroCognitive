import React from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';

import { Button } from 'react-bootstrap';

let QUIZ_STATES = {
  imageComponent: <Image />,
  answersComponent: <Question />
};

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      time: 0,
      isOn: false,
      start: 0,

      currentChoice: 'startComponent',
      image_id: 0,
      arrayOfIdx: []

    }

    this.handler = this.handler.bind(this)
    this.handlerImage = this.handlerImage.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({ isOn: false })
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false })
  }
  componentDidMount() {
    if (this.state.currentChoice === 'imageComponent') {
      this.startTimer();
    }
  }

  createUser(){
        this.setState({
        ...this.state,
        currentChoice: 'imageComponent'
    });
    this.startTimer();
  }

  componentDidUpdate() {
    if (this.state.time > 3000) {
      this.stopTimer();
      this.resetTimer();
      this.setState({ currentChoice: 'answersComponent' })
    }
  }

  handler() {
    this.setState({
      currentChoice: 'imageComponent'
    });
    this.startTimer();
  }
  handlerImage(image_id){

      this.setState({
        image_id: image_id,
        arrayOfIdx: [...this.state.arrayOfIdx, image_id]
      });

  }

  render() {
    let task;
    let choice = 0;

    if (this.state.currentChoice === 'startComponent') {
      choice = <div>Hello<Button className=".ml-1"  variant="primary" size="lg" onClick={this.createUser}>START</Button></div>;

    }
    else if (this.state.currentChoice === 'imageComponent') {
                  task = 'Rate the image below:'
                  choice = <div><Header task={task} />{Math.floor(this.state.time / 1000) + 1} seconds have elapsed since mounting.</div>;
                QUIZ_STATES[this.state.currentChoice] = <Image handler={this.handlerImage} arrayOfIdx={this.state.arrayOfIdx}/>
                }
    else {
      task = 'Rate the previous image:'
      choice = <div><Header task={task} /></div>;

      QUIZ_STATES[this.state.currentChoice] = <Question handler={this.handler} image_id={this.state.image_id} />

    }
    return (
      <div>
        <div className="App">
          <header className="App-header">
            {choice}
            {QUIZ_STATES[this.state.currentChoice]}
          </header>
        </div>
      </div>
    );
  }
}


export default App;

// TODO: remove viewed images (how to motivate to view all images from base); 
//       random image_id from images which stay
// TODO: how identify the user user (1 user must to view all images) e.g. images counter?
//       who I am and input field
// TODO: how identify the image with current attempt
// TODO: how read survey data -> local with csv
