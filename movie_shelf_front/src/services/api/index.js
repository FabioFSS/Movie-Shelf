import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export const apiKey = '68e356ae11aabb4bf082a0a61801672e';
export const language = ''; //'pt-BR' 'en-US'
export const page = 1;
<<<<<<< HEAD
export const section = 2;
=======
export const section = 1;
>>>>>>> e47083bc0710f8ab21bbc991f926d918ebafa8bc
