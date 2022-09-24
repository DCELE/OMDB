import axios from 'axios'

const api_key = '6901b7677b691dcb80ee096b90691596'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

//Movie details
export async function getMovieDetail(id) {
    const result = await instance.get(`/movie/${id}`, {
        params: { api_key }
    });
    return result.data;
};

//Movie Cast
export async function getMovieCast(id) {
    const result = await instance.get(`/movie/${id}/credits`, {
        params: { api_key}
    })
    return result.data;
}

//Search movie og tv show
export async function searchMovies(query, page) {
    const result = await instance.get(`/search/movie`, {
        params: { api_key, query, page }
    })
    return result.data.results;
}

export async function discoverMovies(page) {
    const result = await instance.get('/discover/movie', {
        params: { api_key, page }
    })
    return result.data;
}