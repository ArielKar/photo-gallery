import store from "../store/store";

let db;
export function initDB() {
    const request = indexedDB.open("images");
    request.onerror = (e) => {
        console.log("can`t open db", e);
    };

    request.onsuccess = (e: any) => {
        db = e.target.result;
        getImages();
    };

    request.onupgradeneeded = (e: any) => {
        const db = e.target.result;
        db.createObjectStore('images', {key: 'id', autoIncrement: true});
    };
}

export function addImageToDB(imageURL) {
    const trans = db.transaction(['images'], 'readwrite')

    trans.oncomplete = () => {
      console.log("transaction completed")
    };
    trans.onerror = () => {
        console.log("transaction failed")
    };
    trans.onabort = () => {
        console.log("transaction aborted")
    };

    const images = trans.objectStore('images');
    const req = images.add(imageURL);
    req.onsuccess = () => {
        console.log("image added");
    };

    req.onerror = () => {
        console.log("failed to add image");
    };
}

export function getImages() {
    const trans = db.transaction(['images'], 'readwrite');

    trans.oncomplete = () => {
        console.log("transaction completed")
    };
    trans.onerror = () => {
        console.log("transaction failed")
    };
    trans.onabort = () => {
        console.log("transaction aborted")
    };

    const images = trans.objectStore('images');
    const req = images.getAll();
    req.onsuccess = () => {
        const imagesFromDB =  req.result;
        store.dispatch({type:"SET_IMAGES", imagesFromDB});
    };

    req.onerror = () => {
        console.log("failed to retrieve images");
    };
}