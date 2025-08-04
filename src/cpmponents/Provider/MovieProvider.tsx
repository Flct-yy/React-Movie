import { MovieContext } from "../../contexts/MovieContext"
import { useState, useEffect, type ReactNode } from "react";
import type { Movie } from "../../types/movie";


export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites")
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie: Movie) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFavorites = (movieId: number) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }
  const isFavourite = (movieId: number) => {
    return favorites.some(movie => movie.id === movieId)
  }

  const value = {
    favorites,
    addToFavorites,
    removeFavorites,
    isFavourite
  }

  return <MovieContext.Provider value={value}>
    {children}
  </MovieContext.Provider>
}