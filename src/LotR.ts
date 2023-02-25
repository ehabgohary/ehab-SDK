import fetch from "node-fetch";

import { API_KEY } from "./constants";

const callLotRApi = async (endpoint : string): Promise<Record<string, any>>=> {
    const response = await fetch("https://the-one-api.dev/v2/" + endpoint, { 
        headers: {
            Authorization: "Bearer " +  API_KEY
        }
    })
    return await response.json();
}

export const listMovies = async() => {
    return await callLotRApi("movie");
}

export const getMovie = async(movieId: string) => {
    return await callLotRApi("movie/" + movieId);
}

export const listQuotes = async(movieId: string) => {
    return await callLotRApi("movie/" + movieId + "/quote");
}