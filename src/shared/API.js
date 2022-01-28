import axios from "axios";

const apiKey ='d3e7977ba1b36280f233e379423c3399';
//process.env.local.REACT_APP_API_KEY;

export const searchMovies = (query) => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  return axios.get(URL);
};

// TODO: implement this at some point. Currently not used!
export const searchActors = (query) => {
  const URL = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}&language=en-US`;
  return axios.get(URL);
};
