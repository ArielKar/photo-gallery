import * as React from 'react';

const Photo = (props) => {
    return (
            <img src={props.src} className="tile tile-image"/>
    )
}

export default Photo;