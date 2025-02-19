import React from "react";

const GameDetailsPage = () => {
  // Mock game data
  const game = {
    title: "Cyber Battle",
    genre: "Action-Adventure",
    description:
      "Cyber Battle is a fast-paced, futuristic action game where players fight for control of cyberspace. With immersive graphics and intense gameplay, it’s a top choice for competitive gamers."
  };

  return (
    <div className="game-details-page p-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
      <p className="text-lg font-semibold mb-2">Genre: {game.genre}</p>
      <p className="text-base">{game.description}</p>
    </div>
  );
};

export default GameDetailsPage;