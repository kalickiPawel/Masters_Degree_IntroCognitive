import React from 'react';
import { Table } from 'react-bootstrap';
import { CSVLink } from 'react-csv';


class EndQuiz extends React.Component {
    constructor(props) {
        super(props);
        let csvData = [];
        csvData.push(['lp', 'datetime', 'answerId', 'imageId'])
        for (let i = 0; i < this.props.arrayOfAnswers.length; i++) {
            csvData.push([i + 1, this.props.arrayOfDates[i], this.props.arrayOfAnswers[i], this.props.arrayOfIdx[i]]);
        }
        this.state = {
            data: csvData
        }

        this.createDownload = this.createDownload.bind(this);
    }
    createDownload() {
        console.log(this.state.data);
    }
    createTable = () => {
        let table = []
        table.push(<tr><th>Lp.</th><th>DateTime</th><th>Answer</th><th>Image</th></tr>);
        for (let i = 0; i < this.props.arrayOfAnswers.length; i++) {
            let children = [];
            children.push(<td>{`${i + 1}`}</td>);
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
                <p><CSVLink filename={this.props.userName + ".csv"} className="btn btn-danger" data={this.state.data}>Download</CSVLink></p>
                <Table striped bordered hover variant="dark">
                    {this.createTable()}
                </Table>
            </div >
        );
    }
}

export default EndQuiz;