import {Action, AnyAction, createStore, Dispatch, Unsubscribe} from "redux";
// import * as fs from 'fs';
// import {promisify} from 'util';

// const readFileAsync = promisify(fs.readFile);

const images = localStorage.images ? JSON.parse(localStorage.images) : [];

interface IState {
    images: String[]
}

export interface IStore {
    dispatch: Dispatch<Action | any>;
    getState(): IState;
    subscribe(listener: () => void): Unsubscribe;
}

const initialState: IState =  {
    images
};

const reducer = (state: IState, action: AnyAction): IState => {
    switch (action.type) {
        case "ADD_IMAGE":
            const images = state.images.concat([action.dataURL]);
            localStorage.images = JSON.stringify(images);
            return {
                ...state,
                images
            }
    }
    return state;
};

const store: IStore = createStore(reducer, initialState);

export default store;