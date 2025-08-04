import "../scss/Home.scss"

import MovieCard from "../cpmponents/MovieCard"
import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from "../services/api"
import type { Movie } from "../types/Movie";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setmovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setmovies(popularMovies)
        setError("")
      } catch (error) {
        console.log(error);
        setError("Failed to load movies...")
      } finally {
        setLoading(false)
      }
    }

    loadPopularMovies();
  }, [])

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(searchQuery.trim() === "") return;
    if(loading)return

    try {
      const searchResults = await searchMovies(searchQuery);
      setmovies(searchResults)
      setError("")
    } catch (error) {
      console.log(error);
      setError("Failed to search movies...")
    }finally{
      setLoading(false)
    }

  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value) }}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading ?
        <div className="loading">Loading...</div> :
        <div className="movies-grid">
          {movies.map((movie) =>
          // 实时更新搜索结果
          // movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) && 
          (
            <MovieCard movie={movie} key={movie.id} />
          )
          )}
        </div>
      }

    </div>
  )
}

export default Home