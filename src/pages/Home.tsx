import "../scss/Home.scss"

import MovieCard from "../cpmponents/MovieCard"
import { useState } from "react"
import type { Movie } from "../types/movie"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies: Movie[] = [
    { id: 1, title: "Tim's Film", url: "", release_date: "2021" },
    { id: 2, title: "John's Film", url: "", release_date: "2022" },
    { id: 3, title: "Tom's Film", url: "", release_date: "2023" },
    { id: 4, title: "Alax's Film", url: "", release_date: "2024" },
  ]

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    alert("Search")
    event.preventDefault()
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

      <div className="movies-grid">
        {movies.map((movie) =>
          // 实时更新搜索结果
          // movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) && 
          (
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  )
}

export default Home