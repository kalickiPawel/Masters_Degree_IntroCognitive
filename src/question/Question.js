import React from 'react';
import { Button } from 'react-bootstrap';

class Question extends React.Component {
    constructor(props) {
        super();
        this.state = {
            answer: ["wspaniały", "dobry", "przeciętny", "słaby", "zły"],
            datas: []
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e, value) {
        const timestamp = Date.now();
        let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
        console.log(date);
        console.log("ans: " + (value.index + 1) + "\nimage_id: " + this.props.image_id);
        
        this.props.handler(value.index + 1, date);
    }

    console_save = (data, filename) => {

        if (!data) {
            console.error('Console.save: No data')
            return;
        }

        if (!filename) filename = 'console.json'

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], { type: 'text/json' }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
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