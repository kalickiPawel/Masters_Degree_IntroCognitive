import React from 'react';


class Image extends React.Component {

    constructor(props) {
        super();
        this.state = {

            images: this.importAll(require.context('../koperty/', false, /\.(png|jpe?g|svg)$/)),
            image_id: 0,
        };
    }

    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount()
    {
    let value = Math.floor(0 + Math.random() * ((this.state.images.length - 1) - 0));
    
    console.log(this.props.userName);
    console.log(this.props.arrayOfAnswers);
    console.log(this.props.arrayOfIdx);
    console.log(this.props.arrayOfDates);
    console.log(this.props.counter);
    if(this.props.arrayOfIdx.includes(value))
       value = Math.floor(0 + Math.random() * ((this.state.images.length - 1) - 0));
    if(this.props.counter === this.state.images.length)
    {
        console.log("the end");
        console.log(this.props.counter);
    }
    this.props.handler(value);
    this.setState({
        image_id: value
    });
    }

    render() {
        return (
            <div className="image" >
                <img src={this.state.images[this.state.image_id]} alt={this.state.image_id} />
            </div>
        );
    }
}
export default Image;