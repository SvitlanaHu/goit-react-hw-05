import { useEffect, useState } from "react";
import { getPopular } from "../components/API/tmdbApi";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loader } from "../components/Loader/Loader";
import { MoviesList } from "../components/MoviesList/MoviesList";

function HomePage() {
  const [popularFilms, setPopularFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPopular() {
      try {
        setLoading(true);
        setError(false);
        const fetchedFilms = await getPopular({
          abortController: controller,
        });
        setPopularFilms(fetchedFilms);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPopular();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {popularFilms.length > 0 && <p>Trending today</p> && (
        <MoviesList films={popularFilms} />
      )}
    </div>
  );
}

export default HomePage;
