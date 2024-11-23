import React from "react";
import { useNavigate, Link } from "react-router-dom";

const GameCard = ({ image, altText, buttonText, gameLink, bgColor }) => {
  const navigate = useNavigate();

  // Определяем класс для кнопки на основе bgColor
  const getButtonClass = () => {
    if (bgColor.includes("255, 71, 71")) return "play-button-red";
    if (bgColor.includes("255, 215, 0")) return "play-button-gold";
    if (bgColor.includes("163, 71, 255")) return "play-button-purple";
    if (bgColor.includes("71, 191, 255")) return "play-button-blue";
    return "";
  };

  return (
    <Link to={gameLink} style={{ textDecoration: "none" }}>
      <div className="game-card">
        <img src={image} alt={altText} />
        <button 
          className={`play-button ${getButtonClass()}`}
        >
          PLAY
        </button>
      </div>
    </Link>
  );
};

export default GameCard;