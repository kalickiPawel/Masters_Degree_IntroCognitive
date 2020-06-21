import React from 'react';
import { Table, Button } from 'react-bootstrap';


class EndQuiz extends React.Component {
    constructor(props) {
        super();
    }
    createTable = () => {
        let table = []
        table.push(<tr><th>Lp.</th><th>DateTime</th><th>Answer</th><th>Image</th></tr>);
        for (let i = 0; i < this.props.arrayOfAnswers.length; i++) {
            let children = [];
            children.push(<td>{`${i}`}</td>);
            children.push(<td>{`${this.props.arrayOfDates[i]}`}</td>);
            children.push(<td>{`${this.props.arrayOfAnswers[i]}`}</td>);
            children.push(<td>{`${this.props.arrayOfIdx[i]}`}</td>);
            table.push(<tr>{children}</tr>);
        }
        return table
    }
    render() {
        return (
            <div className="theEnd" >
                <p>User: {this.props.userName}</p>
                <p><Button>Download</Button></p>
                <Table striped bordered hover variant="dark">
                    {this.createTable()}
                </Table>
            </div >
        );
    }
}

export default EndQuiz;