import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_VIDEOS, setVideos, loadVideosError } from '../actions/video.action';
import { getVideos } from '../api';
import { transform } from '../../lib/video.transformer';

export function* loadVideosWatcher() {
    yield takeLatest(LOAD_VIDEOS, loadVideosFlow);
}

function* loadVideosFlow() {
    const videos = yield call(getVideos);
    try {
        yield put(setVideos(transform(videos)));
    } catch (e) {
        console.log(e);
        yield call(loadVideosError(e));
    }
}