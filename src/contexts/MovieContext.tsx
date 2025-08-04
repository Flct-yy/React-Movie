import { createContext, useContext } from "react";
import type { Movie } from "../types/movie";

interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFavorites: (movieId: number) => void;
  isFavourite: (movieId: number) => boolean;
}
// 这个类型就是<MovieContext.Provider value={value}>的value属性的类型
export const MovieContext = createContext<MovieContextType | null>(null);


export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('必须在MovieProvider内使用');
  }
  return context;
}

