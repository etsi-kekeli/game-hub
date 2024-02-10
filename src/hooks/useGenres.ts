import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenreResult {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState(Array<Genre>);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResult>("genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    //   .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
