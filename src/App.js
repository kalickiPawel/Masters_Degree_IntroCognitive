import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';
import Timer from './timer';

const image_id = 0;

const QUIZ_STATES = {
  imageComponent: <Image image_id={image_id} />,
  answersComponent: <Question />
};


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentChoice: 'imageComponent'
    }
  }

  render() {
    console.log(Timer.time);
    const task = "Tesc 1";
    const seconds = 2;
    const image_id = 10;
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Header task={task} />
            {seconds} seconds have elapsed since mounting.
            <Timer />
            {QUIZ_STATES[this.state.currentChoice]}
          </header>
        </div>
      </div>
    );
  }
}


export default App;