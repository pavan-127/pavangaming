import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import "./Sidebar.css";

const defaultGames = [
  {
    id: 1,
    name: "Apex Legends",
    ratingSum: 20,
    ratingCount: 4,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    ratingSum: 45,
    ratingCount: 10,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
  },
  {
    id: 3,
    name: "Call of Duty: Warzone",
    ratingSum: 25,
    ratingCount: 5,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg",
  },
  {
    id: 4,
    name: "GTA V",
    ratingSum: 60,
    ratingCount: 12,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
  },
];

const Sidebar = () => {
  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem("games");
    return saved ? JSON.parse(saved) : defaultGames;
  });

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const rateGame = (id, rating) => {
    const updated = games.map((game) =>
      game.id === id
        ? {
            ...game,
            ratingSum: game.ratingSum + rating,
            ratingCount: game.ratingCount + 1,
          }
        : game
    );
    setGames(updated);
  };

  return (
    <aside className="sidebar">
      <h2>🎮 Top PC Games</h2>
      {games.map((game) => {
        const avg = game.ratingCount
          ? game.ratingSum / game.ratingCount
          : 0;

        return (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} />
            <div className="game-info">
              <div className="game-title">{game.name}</div>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="star-icon"
                    style={{
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                      color: avg >= star ? "#facc15" : "#6b7280",
                    }}
                    onClick={() => rateGame(game.id, star)}
                    fill={avg >= star ? "#facc15" : "none"}
                  />
                ))}
              </div>
              <div className="rating-text">
                Avg Rating: {avg.toFixed(1)} / 5
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
