import React from 'react';
import './App.css';

import Header from './header';
import Image from './image';
import Question from './question';
import EndQuiz from './endquiz';

import { Button, Form, Col } from 'react-bootstrap';

let QUIZ_STATES = {
  imageComponent: <Image />,
  answersComponent: <Question />,
  endComponent: <EndQuiz />
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
      arrayOfIdx: [],
      arrayOfAnswers: [],
      arrayOfDates: [],
      userName: '',
      imageLength: 0
    }

    this.handler = this.handler.bind(this)
    this.handlerImage = this.handlerImage.bind(this)
    this.handleChange = this.handleChange.bind(this);
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

  createUser(event) {
    event.preventDefault();
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

  handler(answer, date) {
    if (this.state.arrayOfAnswers.length === (this.state.imageLength - 1)) {
      this.setState({
        currentChoice: 'endComponent',
        arrayOfAnswers: [...this.state.arrayOfAnswers, answer],
        arrayOfDates: [...this.state.arrayOfDates, date],
      });
    }
    else {
      this.setState({
        currentChoice: 'imageComponent',
        arrayOfAnswers: [...this.state.arrayOfAnswers, answer],
        arrayOfDates: [...this.state.arrayOfDates, date],
      });
      this.startTimer();
    }
  }

  handlerImage(image_id, imageLength) {
    this.setState({
      image_id: image_id,
      arrayOfIdx: [...this.state.arrayOfIdx, image_id],
      imageLength: imageLength
    });
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  render() {
    let task;
    let choice = 0;

    if (this.state.currentChoice === 'startComponent') {
      choice = <div>
        Hello
          <Form onSubmit={this.createUser}>
          <Form.Row>
            <Col>
              <input className="form-control" type="text" placeholder="Nick name" value={this.state.userName} onChange={this.handleChange} required />
            </Col>
            <Button type="submit">START</Button>
          </Form.Row>
        </Form>
      </div>
    }
    else if (this.state.currentChoice === 'imageComponent') {
      task = 'Rate the image below:'
      choice = <div><Header task={task} countOfAnswers={this.state.arrayOfAnswers.length + 1} lengthOfImages={this.state.imageLength} />{Math.floor(this.state.time / 1000) + 1} seconds have elapsed since mounting.</div>;
      QUIZ_STATES[this.state.currentChoice] = <Image handler={this.handlerImage} arrayOfIdx={this.state.arrayOfIdx} />
    }
    else if (this.state.currentChoice === 'endComponent') {
      choice = <div>Pobierz wyniki</div>
      QUIZ_STATES[this.state.currentChoice] = <EndQuiz arrayOfIdx={this.state.arrayOfIdx} arrayOfAnswers={this.state.arrayOfAnswers} userName={this.state.userName} arrayOfDates={this.state.arrayOfDates} />;
    }
    else {
      task = 'Rate the previous image:'
      choice = <div><Header task={task} countOfAnswers={this.state.arrayOfAnswers.length + 1} lengthOfImages={this.state.imageLength} /></div>;

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

// TODO: how read survey data -> local with csv
