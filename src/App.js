import React from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';

const QUIZ_STATES = {
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
      currentChoice: 'imageComponent'
    }

    this.handler = this.handler.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
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

  componentWillUpdate() {
    if (this.state.time > 3000) {
      this.stopTimer();
      this.setState({ currentChoice: 'answersComponent' })
      this.resetTimer();
    }
  }

  handler() {
    this.setState({
      currentChoice: 'imageComponent'
    })
  }

  render() {
    let task;
    let choice = 0;

    if (this.state.currentChoice == 'imageComponent') {
      task = 'Rate the image below:'
      choice = <div><Header task={task} />{Math.floor(this.state.time / 1000) + 1} seconds have elapsed since mounting.</div>;
    }
    else {
      task = 'Rate the previous image:'
      choice = <div><Header task={task} /></div>;
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

// TODO: onclick answerComponent and change currentChoice in parent component
// TODO: remove viewed images (how to motivate to view all images from base); 
//       random image_id from images which stay
// TODO: how indentify the user user (1 user must to view all images) e.g. images counter?
// TODO: how read survey data