import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";
  return (
    <div className={styles.card}>
      <img
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : defaultImg
        }
        alt="poster"
        className={styles.img}
      />

      <div className={styles.descBlock}>
        <p className={styles.title}>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </p>
        <p>Movie Popularity: {movie.popularity.toFixed(1)}%</p>
        <p className={styles.overview}>Overview</p>
        <p>{movie.overview}</p>
        <p className={styles.gerres}>Genres</p>
        <p>{movie.genres.map((item) => item.name).join(", ")}</p>
      </div>
    </div>
  );
};