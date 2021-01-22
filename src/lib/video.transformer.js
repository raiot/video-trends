export const transform = payload => {
    const videos = payload?.results;
    if(videos) {
        return videos.map(video => ({
            name: video.original_name,
            lang: video.original_language,
            rating: video.vote_average,
            description: video.overview,
            poster: video.poster_path,
            airDate: video.first_air_date
        }));
    }
    throw 'Error with the API';
}