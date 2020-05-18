import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';

const image_id = 0;

const QUIZ_STATES = {
  imageComponent: <Image image_id={image_id} />,
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

  render() {
    const task = "Tesc 1";
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Header task={task} />
            {this.state.time} seconds have elapsed since mounting.
            {QUIZ_STATES[this.state.currentChoice]}
          </header>
        </div>
      </div>
    );
  }
}


export default App;