import React from 'react';

import './style.css';

function Header(props) {
    return (
        <div className="header">
            Task: {props.task}
        </div>
    )
}
export default Header;