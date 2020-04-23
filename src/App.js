import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';



const App = () => {
  const [seconds, setSeconds] = useState(0);
  let task, image;

  for (let i = 0; i < 75; i++) {
    

    let tasks = ["Tresc 1", "Tresc 2"];
    
    if (seconds < 5) {

      //Display image
      //var img = document.createElement("img");
      //img.src = './koperty/BlackBlue.png';
      //image = img;
    }
    else {
      task = tasks[1];
      //sprawdza czy przycisk zostal wcisniety i ustawia czas na 0
      setSeconds(0);
    }
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
        <Image name={image} />
        <Question name="Jakub" />
      </header>
    </div>
  )
}

export default App;