import * as React from 'react';


const AddPhoto = (props: any) => {
    return (
        <div className="tile tile-add" onClick={props.addPhoto}>+</div>
    )
};

export default AddPhoto;