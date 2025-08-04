import "../scss/Favorites.scss"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../cpmponents/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  console.log(favorites);
  
  if (favorites.length !== 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites </h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding movies to your favourites and they will apear here</p>
    </div>
  )
}

export default Favorites;