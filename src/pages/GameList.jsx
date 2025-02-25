<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> 22c2807eac3dd708936b2ddd63a06dafc5e9e738
import GameCard from "./GameCard";

const GameList = ({ games }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

<<<<<<< HEAD
// Prop validation using PropTypes
GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

=======
>>>>>>> 22c2807eac3dd708936b2ddd63a06dafc5e9e738
export default GameList;
