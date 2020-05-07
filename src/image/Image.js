import React from 'react';


class Image extends React.Component {
    constructor(props) {
        super();
        this.state = {
            images: this.importAll(require.context('../koperty/', false, /\.(png|jpe?g|svg)$/))
        };
        // let items = [{ "key": "r", "image": require("./img/image1.jpg") },
        // { "key": "b", "image": require("./img/image2.jpg") },
        // { "key": "j", "image": require("./img/image3.jpg") }
        // ];
        // this.state = { image: loadImage() }; //instead of loadImage(0);
    }

    importAll(r) {
        return r.keys().map(r);
    }

    // loadImage(counter) {
    //     //initialize the counter to 0 if no counter was passed
    //     counter = counter || 0;
    //     var i = document.getElementById("img" + counter);
    //     if (counter == imgAddresses.length) { return; }
    //     i.onload = function () {
    //         loadImage(counter + 1)
    //     };
    //     i.src = imgAddresses[counter];
    // }

    componentDidMount() {
        console.log(this.state.images);
    }

    render() {
        return (
            <div className="image" >
                {this.state.images.map((image, index) => {
                    return <li key={index}><img src={image} /></li>
                })}
                Hello world!
            </div>
        );
    }
}
export default Image;