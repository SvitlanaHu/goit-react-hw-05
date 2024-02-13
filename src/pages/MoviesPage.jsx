import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import { Loader } from "../components/Loader/Loader";
import { searchMoviesByKeyword } from "../components/API/tmdbApi";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { MoviesList } from "../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const [params, setParams] = useSearchParams();  

  const changeParams = (newParams) => {
    params.set("query", newParams);
    setParams(params);
  };

    useEffect(() => {
      const controller = new AbortController();
      const query = params.get("query") ?? "";
      const fetchSearchResults = async () => {          
        if (query) {
          setLoading(true);
          try {
            setError(false);
            const response = await searchMoviesByKeyword({
              keyword: query,
              abortController: controller,
            });
            setSearchResults(response);
          } catch (error) {
            if (error.code !== "ERR_CANCELED") {
              setError(true);
            }
          } finally {
            setLoading(false);
          }
        }
    };

    fetchSearchResults();
    return () => {
      controller.abort();
    };
  }, [params]);

  return (
    <main>
      {error && <ErrorMessage />}
      <SearchForm onSearch={changeParams} />
      {loading && <Loader />}
      <MoviesList films={searchResults} />
    </main>
  );
};

export default MoviesPage;
