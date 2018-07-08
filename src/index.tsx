import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/store";


ReactDOM.render(
    <Provider store={store as any}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
