import React, { useState } from "react";
import ColorRenderer from "./01-color-renderer/ColorRederer";
import "./allChallenges.css";
import DarkMode from "./02-DarkMode/DarkMode";
import FormValidator from "./03-FormValidator/FormValidator";
import PixelArt from "./04-PixelArt/PixelArt";

export default function AllChallenges() {
  const [showColorRenderer, setShowColorRenderer] = useState(false);
  const [showDarkMode, setShowDarkMode] = useState(false);
  const [showFormValidator, setShowFormValidator] = useState(false);
  const [showPixelArt, setShowPixelArt] = useState(false);

  const handleShowColorRenderer = () => {
    setShowColorRenderer(true);
    setShowDarkMode(false);
    setShowFormValidator(false);
    setShowPixelArt(false);
  };

  const handleShowDarkMode = () => {
    setShowDarkMode(true);
    setShowColorRenderer(false);
    setShowFormValidator(false);
    setShowPixelArt(false);
  };

  const handleFormValidator = () => {
    setShowFormValidator(true);
    setShowColorRenderer(false);
    setShowDarkMode(false);
    setShowPixelArt(false);
  };

  const handleShowPixelArt = () => {
    setShowPixelArt(true);
    setShowColorRenderer(false);
    setShowDarkMode(false);
    setShowFormValidator(false);    
  };

  const handleBackButtonClick = () => {
    setShowColorRenderer(false);
    setShowDarkMode(false);
    setShowFormValidator(false);
    setShowPixelArt(false);
  };



  return (
    <div>
      <div style={{ backgroundColor: "purple", padding: 0 }}>
        <p>React Code Challenges</p>
      </div>
      <div className="mainpage">
        {!showColorRenderer && !showDarkMode && !showFormValidator && !showPixelArt && (
          <>
            <button onClick={handleShowColorRenderer}>
              Show Color Renderer Challenge
            </button>
            <button onClick={handleShowDarkMode}>
              Show Dark Mode Challenge
            </button>
            <button onClick={handleFormValidator}>
              Show Form Validator Challenge
            </button>
            <button onClick={handleShowPixelArt}>
              Show Pixel Art Challenge
            </button>
          </>
        )}

        {showColorRenderer && (
          <>
            <button onClick={handleBackButtonClick}>Back</button>
            <ColorRenderer />
          </>
        )}

        {showDarkMode && (
          <>
            <button onClick={handleBackButtonClick}>Back</button>
            <DarkMode />
          </>
        )}

        {showFormValidator && (
          <>
            <button onClick={handleBackButtonClick}>Back</button>
            <FormValidator />
          </>
        )}

        {showPixelArt && (
          <>
            <button onClick={handleBackButtonClick}>Back</button>
            <PixelArt />
          </>
        )}
      </div>
    </div>
  );
}
