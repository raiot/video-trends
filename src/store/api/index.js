const key = process.env.REACT_APP_API_KEY

const getTrending = async () => {
    return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`).then(res => res.json());
}

const videosBySection = {
    trending: getTrending
};

export const getVideos = async (section = 'trending') => {
    return videosBySection[section]();
}
