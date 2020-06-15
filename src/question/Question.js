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
        console.log("ans: " + (value.index + 1) + "\nimage_id: " + this.props.image_id);
        this.props.handler();
    }

    render() {
        return (
            <div className="question">
                <hr></hr>
                <ul className="list-group list-group-horizontal">
                    {this.state.answer.map((value, index) => {
                        return <li className="list-group-item" key={index}><Button className=".ml-1" value={index} variant="primary" size="lg" onClick={e => this.handleClick(e, { index })}>{value}</Button></li>
                    })
                    }
                </ul>
            </div >
        );
    }
}
export default Question;