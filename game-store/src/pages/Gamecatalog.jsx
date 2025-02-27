import { useState } from "react";
import GameList from "./GameList";
import SearchBar from "./SearchBar";

// Sample data
export const gamesData = [
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
    {
      id: 4,
      title: "God of War (2018)",
      genre: "Action",
      description: "Kratos and his son Atreus journey through Norse mythology.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Red Dead Redemption 2",
      genre: "Action-Adventure",
      description: "An open-world Western epic by Rockstar Games.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "The Witcher 3: Wild Hunt",
      genre: "RPG",
      description:
        "A fantasy RPG where Geralt of Rivia hunts monsters and navigates politics.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Cyberpunk 2077",
      genre: "RPG",
      description: "A futuristic open-world RPG by CD Projekt Red.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Hollow Knight",
      genre: "Metroidvania",
      description: "A beautifully crafted 2D action-platformer with deep lore.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      title: "Dark Souls III",
      genre: "Action RPG",
      description: "A challenging action RPG set in a dark fantasy world.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      title: "Bloodborne",
      genre: "Action RPG",
      description: "A gothic horror action RPG developed by FromSoftware.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      title: "Persona 5 Royal",
      genre: "JRPG",
      description:
        "A turn-based RPG featuring high school life and dungeon crawling.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      title: "Sekiro: Shadows Die Twice",
      genre: "Action",
      description: "A ninja action game focused on precise swordplay.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      title: "Minecraft",
      genre: "Sandbox",
      description: "A blocky, creative survival game.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      title: "Stardew Valley",
      genre: "Simulation",
      description: "A farming and life simulation game with RPG elements.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      title: "Hades",
      genre: "Roguelike",
      description: "An action-packed dungeon crawler set in Greek mythology.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      title: "Resident Evil 4 Remake",
      genre: "Survival Horror",
      description: "A modernized remake of the classic horror action game.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 17,
      title: "Doom Eternal",
      genre: "FPS",
      description: "A fast-paced first-person shooter with brutal combat.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 18,
      title: "The Last of Us Part II",
      genre: "Action-Adventure",
      description:
        "A narrative-driven survival game set in a post-apocalyptic world.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 19,
      title: "Final Fantasy VII Remake",
      genre: "JRPG",
      description: "A reimagining of the classic RPG with action combat.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 20,
      title: "Metroid Dread",
      genre: "Metroidvania",
      description: "A thrilling 2D platformer starring Samus Aran.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 21,
      title: "Halo Infinite",
      genre: "FPS",
      description: "The latest entry in the legendary Halo series.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 22,
      title: "Monster Hunter: World",
      genre: "Action RPG",
      description:
        "A game where you hunt massive creatures in a living ecosystem.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 23,
      title: "Ghost of Tsushima",
      genre: "Action-Adventure",
      description: "A samurai open-world game set in feudal Japan.",
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
