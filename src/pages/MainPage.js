import React from "react";
import GameCard from "../components/GameCard";
import image1win from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <img 
        src={image1win} 
        alt="1Win Logo" 
        className="main-logo"
      />
  
      <div className="games-grid">
        <GameCard
          image={image2}
          altText="Lucky Jet"
          buttonText="Play Now"
          gameLink="/game1"
          bgColor="rgba(255, 71, 71, 0.8)"
        />
        <GameCard
          image={image3}
          altText="JetX"
          buttonText="Play Now"
          gameLink="/game2"
          bgColor="rgba(255, 215, 0, 0.8)"
          style={{ width: "280px", height: "280px" }}
        />
        <GameCard
          image={image5}
          altText="Rocket Queen"
          buttonText="Play Now"
          gameLink="/game3"
          bgColor="rgba(163, 71, 255, 0.8)"
        />
        <GameCard
          image={image4}
          altText="Space X"
          buttonText="Play Now"
          gameLink="/game4"
          bgColor="rgba(71, 191, 255, 0.8)"
        />
      </div>
    </div>
  );
};

export default MainPage;
