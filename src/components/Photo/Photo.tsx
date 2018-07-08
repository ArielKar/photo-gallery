import * as React from 'react';

const Photo = (props) => {
    return (
        <div className="tile">
            <img src={props.src} className="tile-image"/>
        </div>
    )
}

export default Photo;