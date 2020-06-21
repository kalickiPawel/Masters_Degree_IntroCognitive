import React from 'react';

import './style.css';

function Header(props) {
    return (
        <div className="header rounded col-md-12">
            Task no. {props.countOfAnswers} from {props.lengthOfImages} Images: {props.task}
        </div>
    )
}
export default Header;