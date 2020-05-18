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
        return (
            <div className="image" >
                <img src={this.state.images[this.props.image_id]} />
            </div>
        );
    }
}
export default Image;