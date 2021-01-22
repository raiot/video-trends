import { fork } from 'redux-saga/effects';
import { loadVideosWatcher } from './load-video.saga';

export default function* rootSaga() {
    yield fork(loadVideosWatcher);
}