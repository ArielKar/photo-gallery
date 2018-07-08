import * as React from 'react';
import {connect} from 'react-redux';
import './Photos.css';
import AddPhoto from "../../components/AddPhoto/AddPhoto";
import Photo from "../../components/Photo/Photo";

interface IPhotosProps {
    images: String[]
    addImage: (String) => void
}

class Photos extends React.Component<IPhotosProps,{}> {
    fileInput;

    constructor(props: IPhotosProps) {
        super(props);
        this.fileInput = React.createRef();
    }

    onAddPhotoHandler = () => {
        this.fileInput.current.click();
    };

    onPhotoSelectHandler = (e) => {
        const fr = new FileReader();

        fr.readAsDataURL(e.target.files[0]);
        fr.onload = () => {
            this.props.addImage(fr.result);
        };
    };

    buildTiles = () => {
        console.log(this.props.images);
        if (!this.props.images) return null;
        return this.props.images.map((imageURL, idx) => {
            return <Photo src={imageURL} key={idx}/>
        });
    };

    render() {
        return (
            <div className="photos-wrapper">
                <input type="file" style={{display: 'none'}} ref={this.fileInput} onChange={this.onPhotoSelectHandler}/>
                <AddPhoto addPhoto={this.onAddPhotoHandler}/>
                {this.buildTiles()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.images
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addImage: (dataURL) => {dispatch({type:"ADD_IMAGE", dataURL})}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);