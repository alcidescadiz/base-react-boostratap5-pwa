const API_KEY = "6ff4627eba00dd45f3018e15dcd7bf01";

const SEARCH_URLNetflix = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_watch_providers=8&watch_region=CA`;
const SEARCH_URLCrave = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_watch_providers=230&watch_region=CA`;
const SEARCH_URLDisney = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_watch_providers=337&watch_region=CA`;
const SEARCH_URLApple = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_watch_providers=350&watch_region=CA`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;

export const searchShows = async (query) => {
	const request = await fetch(`${SEARCH_URLNetflix}&query=${query}`);
	const response = await request.json();
	const shows = await response.results;
	return shows;
};


export const searchShowsCrave = async (query) => {
	const request = await fetch(`${SEARCH_URLCrave}&query=${query}`);
	const response = await request.json();
	const showsCrave = await response.results;
	return showsCrave;
};


export const searchShowsDisney = async (query) => {
	const request = await fetch(`${SEARCH_URLDisney}&query=${query}`);
	const response = await request.json();
	const showsDisney = await response.results;
	return showsDisney;
};


export const searchShowsApple = async (query) => {
	const request = await fetch(`${SEARCH_URLApple}&query=${query}`);
	const response = await request.json();
	const showsApple = await response.results;
	return showsApple;
	
	};
	
export const findAllShows = async (query) => {
	const request = await fetch(`${SEARCH_URL}&query=${query}`);
	const response = await request.json();
	const showsFound = await response.results;
	return showsFound;
};


