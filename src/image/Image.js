import React from 'react';


class Image extends React.Component {
    constructor(props) {
        super();
        this.state = {
            images: this.importAll(require.context('../koperty/', false, /\.(png|jpe?g|svg)$/))
        };
    }

    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount() {
        console.log(this.state.images);
    }

    render() {
        const min = 0;
        const max = this.state.images.length;
        const rand = Math.floor(min + Math.random() * (max - min));
        return (
            <div className="image" >
                <img src={this.state.images[rand]} />
            </div>
        );
    }
}
export default Image;