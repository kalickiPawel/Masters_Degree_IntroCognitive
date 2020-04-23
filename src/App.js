import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  let tasks = ["Tresc 1", "Tresc 2"];
  let task;
  if (seconds < 5) {
    task = tasks[0];
  }
  else {
    task = tasks[1];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header task={task} />
        {seconds} seconds have elapsed since mounting.
        <Image name="Pawel" />
        <Question name="Jakub" />
      </header>
    </div>
  )
}

export default App;