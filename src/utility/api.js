export const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = "8db6474584f0f0b2930deafaa0dc445d";

export const FETCH_NETFLIX_ORIGINALS = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const FETCH_TRENDING = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const FETCH_TOP_RATED =  `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const FETCH_ACTION_MOVIES = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const FETCH_COMEDY_MOVIES = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const FETCH_HORROR_MOVIES = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const FETCH_ROMANCE_MOVIES = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const FETCH_DOCUMENTARIES = `/discover/movie?api_key=${API_KEY}&with_genres=99`;