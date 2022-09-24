import axios from 'axios'

const API_KEY = '?api_key=6901b7677b691dcb80ee096b90691596'
const instance = axios.create({
    BASE_URL: process.env.DB_URL ?? 'https://api.themoviedb.org/3'
})

//Discover movies
export async function getMovies() {
    const result = await instance.get(`/?${API_KEY}`);

    return result.data;
};

//Movie details
export async function getMovieDetail() {
    const result = await instance.get(`/${id}`);
  
    return result.data;
};

//Search movie og tv show
export async function searchShow(query, type){
    const result = await instance.get(`/${type}?${API_KEY}&query=${query}`)

    return result.data.results;
}