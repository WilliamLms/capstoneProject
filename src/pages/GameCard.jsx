import GameCard from "./GameCard";

const gameData = {
  title: "Cyberpunk 2077",
  image: "https://example.com/cyberpunk.jpg",
  genre: "RPG",
  description: "A futuristic open-world RPG.",
};

const App = () => {
  return (
    <div>
      <h1>Game Catalog</h1>
      <GameCard game={gameData} />
    </div>
  );
};

export default App;
