import { combineReducers } from 'redux'
import videosReducer from './videos.reducer';


const rootReducer = combineReducers({
    videos: videosReducer
});

export default rootReducer;