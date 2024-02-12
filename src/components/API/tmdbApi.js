import axios from "axios";
import { AUTHORIZATION } from './tmdbApiKey';

const popularUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const getPopular = async ({ abortController }) => {
    const response = await axios.get(popularUrl, {
        headers: {
            Authorization: AUTHORIZATION,
        },
        signal: abortController.signal,
    });
    console.log('apiData', response.data.results);
    return response.data.results;
};

export const getMovieById = async ({ movieId, abortController }) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
            headers: {
                Authorization: AUTHORIZATION,
            },
            signal: abortController.signal,
        }
    );
    console.log('api', response.data.results);
    return response.data;
};
export const getMovieCast = async ({ movieId, abortController }) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        {
            headers: {
                Authorization: AUTHORIZATION,
            },
            signal: abortController.signal,
        }
    );
    console.log('apiDataCast', response.data.results);
    return response.data.cast;
};

export const getMovieReviews = async ({ movieId, abortController }) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        {
            headers: {
                Authorization: AUTHORIZATION,
            },
            signal: abortController.signal,
        }
    );
    console.log('apiData', response.data.results);
    return response.data.results;
};

export const searchMoviesByKeyword = async ({ keyword, abortController }) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
        {
            headers: {
                Authorization: AUTHORIZATION,
            },
            signal: abortController.signal,
        }
    );
    console.log('apiData', response.data.results);
    return response.data.results;
};
