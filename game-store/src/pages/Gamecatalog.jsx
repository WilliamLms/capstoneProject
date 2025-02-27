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
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"></img>,
    },
    {
      id: 2,
      title: "Elden Ring",
      genre: "RPG",
      description: "A fantasy action RPG developed by FromSoftware.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg"></img>,
    },
    {
      id: 3,
      title: "Super Mario Odyssey",
      genre: "Platformer",
      description: "A 3D platformer featuring Mario's adventures.",
      image: <img src ="https://m.media-amazon.com/images/I/91SF0Tzmv4L.jpg"></img>,
    },
    {
      id: 4,
      title: "God of War (2018)",
      genre: "Action",
      description: "Kratos and his son Atreus journey through Norse mythology.",
      image: <img src ="https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg"></img>,
    },
    {
      id: 5,
      title: "Red Dead Redemption 2",
      genre: "Action-Adventure",
      description: "An open-world Western epic by Rockstar Games.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"></img>,
    },
    {
      id: 6,
      title: "The Witcher 3: Wild Hunt",
      genre: "RPG",
      description:
        "A fantasy RPG where Geralt of Rivia hunts monsters and navigates politics.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"></img>,
    },
    {
      id: 7,
      title: "Cyberpunk 2077",
      genre: "RPG",
      description: "A futuristic open-world RPG by CD Projekt Red.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"></img>,
    },
    {
      id: 8,
      title: "Hollow Knight",
      genre: "Metroidvania",
      description: "A beautifully crafted 2D action-platformer with deep lore.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp"></img>,
    },
    {
      id: 9,
      title: "Dark Souls III",
      genre: "Action RPG",
      description: "A challenging action RPG set in a dark fantasy world.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg"></img>,
    },
    {
      id: 10,
      title: "Bloodborne",
      genre: "Action RPG",
      description: "A gothic horror action RPG developed by FromSoftware.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg"></img>,
    },
    {
      id: 11,
      title: "Persona 5 Royal",
      genre: "JRPG",
      description:
        "A turn-based RPG featuring high school life and dungeon crawling.",
      image: <img src = "https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_cover_art.jpg"></img>,
    },
    {
      id: 12,
      title: "Sekiro: Shadows Die Twice",
      genre: "Action",
      description: "A ninja action game focused on precise swordplay.",
      image: <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg"></img>,
    },
    {
      id: 13,
      title: "Minecraft",
      genre: "Sandbox",
      description: "A blocky, creative survival game.",
      image: <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Minecraft_2024_cover_art.png/220px-Minecraft_2024_cover_art.png"></img>,
    },
    {
      id: 14,
      title: "Stardew Valley",
      genre: "Simulation",
      description: "A farming and life simulation game with RPG elements.",
      image: <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWjybGuWhdyJqjmtziGvtHvCnQf23yY0R6g&s"></img>,
    },
    {
      id: 15,
      title: "Hades",
      genre: "Roguelike",
      description: "An action-packed dungeon crawler set in Greek mythology.",
      image: <img src = "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg"></img>,
    },
    {
      id: 16,
      title: "Resident Evil 4 Remake",
      genre: "Survival Horror",
      description: "A modernized remake of the classic horror action game.",
      image: <img src = "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover_art.jpg"></img>,
    },
    {
      id: 17,
      title: "Doom Eternal",
      genre: "FPS",
      description: "A fast-paced first-person shooter with brutal combat.",
      image: <img src = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/782330/capsule_616x353.jpg?t=1702308063"></img>,
    },
    {
      id: 18,
      title: "The Last of Us Part II",
      genre: "Action-Adventure",
      description:
        "A narrative-driven survival game set in a post-apocalyptic world.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png"></img>,
    },
    {
      id: 19,
      title: "Final Fantasy VII Remake",
      genre: "JRPG",
      description: "A reimagining of the classic RPG with action combat.",
      image: <img src = "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png"></img>,
    },
    {
      id: 20,
      title: "Metroid Dread",
      genre: "Metroidvania",
      description: "A thrilling 2D platformer starring Samus Aran.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Metroid_Dread_Banner.png/220px-Metroid_Dread_Banner.png"></img>,
    },
    {
      id: 21,
      title: "Halo Infinite",
      genre: "FPS",
      description: "The latest entry in the legendary Halo series.",
      image: <img src = "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png"></img>,
    },
    {
      id: 22,
      title: "Monster Hunter: World",
      genre: "Action RPG",
      description:
        "A game where you hunt massive creatures in a living ecosystem.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Monster_Hunter_World_cover_art.jpg/220px-Monster_Hunter_World_cover_art.jpg"></img>,
    },
    {
      id: 23,
      title: "Ghost of Tsushima",
      genre: "Action-Adventure",
      description: "A samurai open-world game set in feudal Japan.",
      image: <img src ="https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"></img>,
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
