import { List, Map } from 'immutable';
import { SET_VIDEOS, LOAD_VIDEOS_ERROR, LOAD_VIDEOS } from '../actions/video.action';

const initialState = Map({
    videos: List()
});

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case LOAD_VIDEOS:
            return state;
        case SET_VIDEOS:
            return state.set('videos', payload);
        case LOAD_VIDEOS_ERROR:
            return state.set('message', payload);
        default:
            return state;
    }
}