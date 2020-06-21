import React from 'react';


class Image extends React.Component {

    constructor(props) {
        super();
        this.state = {
            image_id: 0,
            images: this.importAll(require.context('../koperty/', false, /\.(png|jpe?g|svg)$/)),
        };
    }

    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount() {
        let arrayOfOpenIdx = new Array(this.state.images.length);
        for (let i = 0; i < this.state.images.length; i++)
            arrayOfOpenIdx[i] = i;
        arrayOfOpenIdx = arrayOfOpenIdx.filter((el) => !this.props.arrayOfIdx.includes(el));
        let randomIdx = Math.floor(0 + Math.random() * ((arrayOfOpenIdx.length) - 0));
        let value = arrayOfOpenIdx[randomIdx];
        this.props.handler(value, this.state.images.length);
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