import React, { useState } from "react";
import image1win from "../assets/image1.png";
import image2 from "../assets/image2.png";
import './GamePage.css';

const GamePageLuckyJet = () => {
  const [number, setNumber] = useState(1.00);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setNumber(1.00);
    
    const count = parseInt(localStorage.getItem("pageCount")) || 0;
    const newCount = count + 1;
    localStorage.setItem("pageCount", newCount);

    let rangeMax = 2;
    if (newCount % 25 === 0) {
      rangeMax = 74;
    } else if (newCount % 15 === 0) {
      rangeMax = 20;
    } else if (newCount % 10 === 0) {
      rangeMax = 5;
    } else if (newCount % 4 === 0) {
      rangeMax = 3;
    }

    const randomTarget = 1 + Math.random() * (rangeMax - 1);
    const intervalSpeed = 10;
    let currentWhole = 1;
    let currentDecimal = 0;

    const interval = setInterval(() => {
      if (currentWhole + currentDecimal / 100 < randomTarget) {
        if (currentDecimal < 99) {
          currentDecimal++;
        } else {
          currentWhole++;
          currentDecimal = 0;
        }
        const newNumber = parseFloat(
          `${currentWhole}.${currentDecimal < 10 ? "0" : ""}${currentDecimal}`
        );
        setNumber(newNumber);
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, intervalSpeed);
  };

  const handleAnalyzeClick = () => {
    if (!isAnimating) {
      startAnimation();
    }
  };

  return (
    <div className="game-container">
      <div className="game-content">
        <img src={image1win} alt="1win Logo" style={styles.logoTop} />
        
        <div style={styles.character}>
          <img 
            src={image2} 
            alt="Character" 
            style={styles.characterImage} 
          />
        </div>

        <div style={styles.numberBox}>
          X {number.toFixed(2)}
        </div>

        <div style={styles.status}>
          {isAnimating ? "Analyzing..." : "Your Result"}
        </div>

        <button 
          style={{
            ...styles.analyzeButton, 
            boxShadow: "0 0 20px #ff0000, 0 0 40px #ff0000",
            opacity: isAnimating ? 0.7 : 1,
            cursor: isAnimating ? 'not-allowed' : 'pointer'
          }}
          onClick={handleAnalyzeClick}
          disabled={isAnimating}
          onMouseDown={e => !isAnimating && (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={e => !isAnimating && (e.currentTarget.style.transform = 'scale(1)')}
          onMouseLeave={e => !isAnimating && (e.currentTarget.style.transform = 'scale(1)')}
        >
          ANALYZE
        </button>
      </div>
    </div>
  );
};

const styles = {
  logoTop: {
    width: "280px",
    marginBottom: "15px",
    marginTop: "10px",
  },
  character: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    marginBottom: "20px",
  },
  characterImage: {
    width: "340px",
    height: "auto",
    animation: "float 3s ease-in-out infinite",
    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))",
  },
  numberBox: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
    textShadow: "0 0 10px #ff0000, 0 0 20px #ff0000",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  status: {
    fontSize: "24px",
    color: "#fff",
    marginBottom: "30px",
    textShadow: "0 0 10px #ff0000, 0 0 20px #ff0000",
    textAlign: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    letterSpacing: "0.5px",
  },
  analyzeButton: {
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "16px 30px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "30px",
    width: "90%",
    maxWidth: "280px",
    transition: "all 0.3s ease",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    letterSpacing: "1px",
  }
};

export default GamePageLuckyJet;
