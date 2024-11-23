import React from "react";
import { useNavigate, Link } from "react-router-dom";

const GameCard = ({ image, title, link, theme }) => {
  const navigate = useNavigate();

  const getButtonClass = () => {
    switch (theme) {
      case 'red':
        return 'play-button-red';
      case 'gold':
        return 'play-button-gold';
      case 'purple':
        return 'play-button-purple';
      case 'blue':
        return 'play-button-blue';
      default:
        return '';
    }
  };

  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div className="game-card">
        <img src={image} alt={title} />
      </div>
    </Link>
  );
};

export default GameCard;