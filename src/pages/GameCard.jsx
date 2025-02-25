<<<<<<< HEAD
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
=======
const GameCard = ({ game }) => {
    return (
      <div className="border rounded-lg shadow-md p-4">
        <img src={game.image} alt={game.title} className="w-full h-40 object-cover rounded-md" />
        <h2 className="text-lg font-bold mt-2">{game.title}</h2>
        <p className="text-sm text-gray-600">{game.genre}</p>
        <p className="text-sm mt-1">{game.description}</p>
      </div>
    );
  };
  
  export default GameCard;
>>>>>>> 22c2807eac3dd708936b2ddd63a06dafc5e9e738
