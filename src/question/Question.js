import React from 'react';
import { Button } from 'react-bootstrap';

class Question extends React.Component {
    constructor(props) {
        super();
        this.state = { answer: ["wspaniały", "dobry", "przeciętny", "słaby", "zły"] };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e, value) {
        // console.log(e);
        const timestamp = Date.now();
        console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp));
        console.log(value.index + 1);

    }



    render() {
        return (
            <div className="question">
                {this.state.answer.map((value, index) => {
                    return <Button className=".ml-1" value={index} variant="primary" size="lg" onClick={e => this.handleClick(e, { index })}>{value}</Button>
                })
                }
            </div >
        );
    }
}
export default Question;