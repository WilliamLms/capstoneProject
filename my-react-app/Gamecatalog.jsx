import { useState } from "react";
import GameList from "./components/GameList";
import SearchBar from "./components/SearchBar";

// Sample data
const gamesData = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Adventure",
    description: "An open-world adventure game by Nintendo.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Elden Ring",
    genre: "RPG",
    description: "A fantasy action RPG developed by FromSoftware.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Super Mario Odyssey",
    genre: "Platformer",
    description: "A 3D platformer featuring Mario's adventures.",
    image: "https://via.placeholder.com/150",
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Game Catalog</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GameList games={filteredGames} />
    </div>
  );
};

export default App;
