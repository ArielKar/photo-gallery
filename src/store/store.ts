import {Action, AnyAction, createStore, Dispatch, Unsubscribe} from "redux";
import {addImageToDB, initDB} from "../db/db";

initDB();

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