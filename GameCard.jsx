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