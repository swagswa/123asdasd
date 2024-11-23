import React from "react";
import GameCard from "../components/GameCard";
import image1win from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import './MainPage.css';

const games = [
  {
    id: 1,
    image: image2,
    title: "Lucky Jet",
    link: "/game1",
    theme: "red"
  },
  {
    id: 2,
    image: image5,
    title: "JetX",
    link: "/game3",
    theme: "gold"
  },
  {
    id: 3,
    image: image4,
    title: "Space X",
    link: "/game2",
    theme: "purple"
  },
  {
    id: 4,
    image: image3,
    title: "Rocket Queen",
    link: "/game4",
    theme: "blue"
  }
];

const MainPage = () => {
  return (
    <div className="root">
      <div className="particles">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="particle" />
        ))}
      </div>
      
      <div className="container">
        <header className="header">
          <img 
            src={image1win} 
            alt="1win signals" 
            className="header__logo"
          />
        </header>
        
        <main className="main">
          {games.map((game) => (
            <GameCard
              key={game.id}
              image={game.image}
              title={game.title}
              link={game.link}
              theme={game.theme}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
