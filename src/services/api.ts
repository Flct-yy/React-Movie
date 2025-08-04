import type { Movie } from "../types/Movie";

const API_KEY = "10c678afe580f5fb0f8a7fe1637ad7d3"
const BASE_URL = "https://api.themoviedb.org/3"

interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data:MovieApiResponse = await response.json();
  return data.results;
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data:MovieApiResponse = await response.json();
  return data.results as Movie[];
}