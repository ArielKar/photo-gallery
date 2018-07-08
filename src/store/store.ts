import {Action, AnyAction, createStore, Dispatch, Unsubscribe} from "redux";
import {addImageToDB, initDB} from "../db/db";
// import * as fs from 'fs';
// import {promisify} from 'util';

// const readFileAsync = promisify(fs.readFile);
initDB();

// TODO: change from localStorage to indexedDB or JSON
// const images = localStorage.images ? JSON.parse(localStorage.images) : [];

interface IState {
    images: String[]
}

export interface IStore {
    dispatch: Dispatch<Action | any>;
    getState(): IState;
    subscribe(listener: () => void): Unsubscribe;
}

const initialState: IState =  {
    images: []
};

const reducer = (state: IState, action: AnyAction): IState => {
    switch (action.type) {
        case "ADD_IMAGE":
            const images = state.images.concat([action.dataURL]);
            // localStorage.images = JSON.stringify(images);
            // TODO: export to thunk
            addImageToDB(action.dataURL);
            return {
                ...state,
                images
            };
        case "SET_IMAGES":
            return {
                ...state,
                images: action.imagesFromDB
            }
    }
    return state;
};

const store: IStore = createStore(reducer, initialState);

export default store;