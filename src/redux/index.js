import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import albums from "./albums";
import photos from "./photos";
import {createLogger} from "redux-logger";

const logger = createLogger({
    diff: true,
    collapsed: true
})


const rootReducer = combineReducers({
    albums: albums,
    photos: photos
})

const store = createStore (rootReducer, applyMiddleware(thunk, logger));

export default store;