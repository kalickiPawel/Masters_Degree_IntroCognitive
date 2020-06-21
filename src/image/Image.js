import React from 'react';


class Image extends React.Component {

    constructor(props) {
        super();
        this.state = {
            image_id: 0
        };
    }

    componentDidMount() {
        let arrayOfOpenIdx = new Array(this.props.images.length);
        for (let i = 0; i < this.props.images.length; i++)
            arrayOfOpenIdx[i] = i;
        arrayOfOpenIdx = arrayOfOpenIdx.filter((el) => !this.props.arrayOfIdx.includes(el));
        let randomIdx = Math.floor(0 + Math.random() * ((arrayOfOpenIdx.length) - 0));
        let value = arrayOfOpenIdx[randomIdx];
        console.log(value);
        this.props.handler(value);
        this.setState({
            image_id: value
        });
    }

    render() {
        return (
            <div className="image" >
                <img src={this.props.images[this.state.image_id]} alt={this.state.image_id} />
            </div>
        );
    }
}
export default Image;