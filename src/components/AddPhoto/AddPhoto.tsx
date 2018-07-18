import * as React from 'react';


const AddPhoto = (props: any) => {
    return (
        <div className="tile" onClick={props.addPhoto}>
            <div className="tile-add">+</div>
        </div>
    )
};

export default AddPhoto;