import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export const apiKey = '68e356ae11aabb4bf082a0a61801672e';
export const language = ''; //'pt-BR' 'en-US'
export const page = 1;
export const section = 2;