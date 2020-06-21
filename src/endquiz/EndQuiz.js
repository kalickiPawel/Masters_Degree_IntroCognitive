import React from 'react';


class EndQuiz extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="theEnd" >
                {this.props.userName} <br />
                {this.props.arrayOfIdx} <br />
                {this.props.arrayOfAnswers} <br />
                {this.props.arrayOfDates} <br />
            </div>
        );
    }
}

export default EndQuiz;