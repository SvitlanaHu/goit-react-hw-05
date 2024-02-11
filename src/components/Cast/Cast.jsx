import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../API/tmdbApi";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loader } from "../Loader/Loader";
import css from "./Cast.module.css";

const Cast = () => {
  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await getMovieCast({
          movieId,
          abortController: controller,
        });
        setActors(response);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ul className={css.list}>
        {actors.map((actor) => (
          <li key={actor.id} className={css.listItem}>
            <div className={css.box}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImg
                }
                alt="Actor photo"
                width={100}
                height={140}
              />
              <p className={css.name}>{actor.name}</p>
              <p className={css.hero}>Character:{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
