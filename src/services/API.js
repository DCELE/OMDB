import axios from 'axios'

const API_KEY = '6901b7677b691dcb80ee096b90691596'

const instance = axios.create({
    BASE_URL: process.env.DB_URL ?? 'https://api.themoviedb.org/3'
})

//Movie details
export async function getMovieDetail() {
    const result = await instance.get(`/${id}`);
    return result.data;
};

//Search movie og tv show
export async function searchShow(query, type) {
    const result = await instance.get(`/${type}?${API_KEY}&query=${query}`)
    return result.data.results;
}

export async function discoverMovies(page) {
    const result = await instance.get('/discover/movie', {
        params: { api_key: API_KEY, page: page }
    })
    return result.data;
}