export const LOAD_VIDEOS = 'LOAD_VIDEOS';
export const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCESS';
export const LOAD_VIDEOS_ERROR = 'LOAD_VIDEOS_ERROR';
export const SET_VIDEOS = 'SET_VIDEOS';

export const loadVideos = () => ({
    type: LOAD_VIDEOS
});

export const setVideos = videos => ({
    type: SET_VIDEOS,
    payload: videos
})

export const loadVideosError = message => ({
    type: LOAD_VIDEOS_ERROR,
    payload: message
})