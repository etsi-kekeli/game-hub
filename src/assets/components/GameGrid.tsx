import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResult {
  count: number;
  //   next: string;
  //   previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState(Array<Game>);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResult>("games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
