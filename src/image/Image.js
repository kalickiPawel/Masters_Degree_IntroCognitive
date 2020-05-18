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

    render() {
        const image_id = Math.floor(0 + Math.random() * ((this.state.images.length - 1) - 0));
        return (
            <div className="image" >
                <img src={this.state.images[image_id]} alt={image_id} />
            </div>
        );
    }
}
export default Image;