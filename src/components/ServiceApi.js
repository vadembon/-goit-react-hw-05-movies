import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=61312ab05e9a01c845b8a911166e2e3c';

export async function fetchTrending() {
  try {
    const url = `${BASE_URL}trending/movie/week?${API_KEY}`;
    const response = await axios.get(url);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSearchMovie(query) {
  try {
    const url = `${BASE_URL}search/movie?${API_KEY}&query=${query}`;
    const response = await axios.get(url);

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const url = `${BASE_URL}movie/${id}?${API_KEY}`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCredits(id) {
  try {
    const url = `${BASE_URL}movie/${id}/credits?${API_KEY}`;
    const response = await axios.get(url);
    console.log('Credits', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieRewiews(id) {
  try {
    const url = `${BASE_URL}movie/${id}/reviews?${API_KEY}`;
    const response = await axios.get(url);
    console.log('rew', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
