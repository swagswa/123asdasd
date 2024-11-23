import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1win from "../assets/image1.png";
import image5 from "../assets/image5.png";
import './GamePage.css';

const GamePageRocketQueen = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(1.00);
  const [isAnimating, setIsAnimating] = useState(false);

  const styles = {
    container: {
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(-45deg, #1a0033, #2b0052, #3d0073, #4c0099)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 15s ease infinite',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    backButton: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: 'clamp(12px, 2vw, 16px)',
      cursor: 'pointer',
      padding: 'clamp(6px, 1.5vw, 12px)',
      zIndex: 10,
    },

    logo: {
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'clamp(80px, 20vw, 150px)',
      height: 'auto',
      objectFit: 'contain',
    },

    centerImage: {
      width: 'clamp(300px, 62.5vw, 500px)',
      height: 'auto',
      objectFit: 'contain',
      animation: 'float 3s ease-in-out infinite',
      marginBottom: 'clamp(15px, 4vw, 30px)',
    },

    numberContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
      marginBottom: 'clamp(20px, 4vw, 40px)',
    },

    numberBox: {
      fontSize: 'clamp(32px, 8vw, 64px)',
      fontWeight: '800',
      color: '#9933ff',
      textShadow: '0 0 10px rgba(153, 51, 255, 0.7)',
      marginBottom: 'clamp(12px, 3vw, 24px)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      letterSpacing: '2px',
      textAlign: 'center',
      width: '100%',
    },

    status: {
      fontSize: 'clamp(16px, 4vw, 32px)',
      color: '#9933ff',
      marginBottom: 'clamp(24px, 5vw, 48px)',
      textShadow: '0 0 10px rgba(153, 51, 255, 0.5)',
      textAlign: 'center',
      width: '100%',
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '0 20px',
    },

    analyzeButton: {
      backgroundColor: 'transparent',
      color: '#9933ff',
      border: '2px solid #9933ff',
      borderRadius: 'clamp(15px, 3vw, 30px)',
      padding: 'clamp(12px, 3vw, 24px) clamp(24px, 5vw, 48px)',
      fontSize: 'clamp(14px, 3.5vw, 28px)',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 0 15px rgba(153, 51, 255, 0.3)',
      letterSpacing: '1px',
      opacity: isAnimating ? 0.7 : 1,
      pointerEvents: isAnimating ? 'none' : 'auto',
      '&:hover': {
        backgroundColor: 'rgba(153, 51, 255, 0.1)',
        boxShadow: '0 0 20px rgba(153, 51, 255, 0.5)',
      },
      margin: '0 auto',
      display: 'block',
    },
  };

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
    let intervalSpeed = 3;
    let currentWhole = 1;
    let currentDecimal = 0;
    let stepSize = 2;
    let intervalId = null;

    const updateNumber = () => {
      if (currentWhole + currentDecimal / 100 < randomTarget) {
        if (currentWhole >= 5) {
          stepSize = 8;
          intervalSpeed = 1;
        } else if (currentWhole >= 3) {
          stepSize = 5;
          intervalSpeed = 2;
        } else if (currentWhole >= 2) {
          stepSize = 3;
          intervalSpeed = 2;
        }

        currentDecimal += stepSize;
        if (currentDecimal >= 99) {
          currentWhole++;
          currentDecimal = 0;
        }
        
        const newNumber = parseFloat(
          `${currentWhole}.${currentDecimal < 10 ? "0" : ""}${currentDecimal}`
        );
        setNumber(newNumber);
        
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(updateNumber, intervalSpeed);
      } else {
        if (intervalId) clearInterval(intervalId);
        setIsAnimating(false);
      }
    };

    intervalId = setInterval(updateNumber, intervalSpeed);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <button 
          style={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← BACK
        </button>
        
        <img src={image1win} alt="Logo" style={styles.logo} />
        
        <img src={image5} alt="Character" style={styles.centerImage} />
        
        <div style={styles.numberContainer}>
          <div style={styles.numberBox}>
            X {number.toFixed(2)}
          </div>
          <div style={styles.status}>
            {isAnimating ? "Analyzing..." : "Your Result"}
          </div>
        </div>

        <button 
          style={styles.analyzeButton}
          onClick={() => !isAnimating && startAnimation()}
          disabled={isAnimating}
        >
          ANALYZE
        </button>
      </div>
    </div>
  );
};

const keyframes = `
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-13px); }
    100% { transform: translateY(0); }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default GamePageRocketQueen;
