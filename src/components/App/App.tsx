import * as React from 'react';
import './App.css';
import Photos from "../../containers/Photos/Photos";

class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="App">
                <h1>Photo Gallery</h1>
                <Photos/>
            </div>
        );
    }
}

export default App;
