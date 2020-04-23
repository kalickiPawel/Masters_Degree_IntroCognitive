import React, {Component} from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';

class App extends Component {
  render(){
    return(
      // <div className="App">
        
      //   <Header />

        <div className="rowC">
        
            <Image name="Pawel" />
            <Question name="Jakub" />
        
        </div>
      // </div>
    
    )
  }
}

export default App;