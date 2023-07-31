// PixelArt.js

import React, { createContext, useContext, useState } from "react";
import "./PixelArt.css";

const ColorContext = createContext({
  color: "lightGreen",
  setColor: () => {}
});

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setColor } = useContext(ColorContext);

  return (
    <div className="color-picker-container">
      <h1 style={{color:'white'}}>Choose a color: </h1>
      {colors.map((color) => (
        <button
          onClick={() => setColor(color)}
          key={color}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const { color } = useContext(ColorContext);
  const [pixelColor, setPixelColor] = useState("lightGrey");

  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor
      }}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);

  return <div className="pixels-container">{pixels}</div>;
}

export default function PixelArt() {
  const [color, setColor] = useState("lightGrey");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <div className="pixel-art-container">
        <ColorPicker />
        <Pixels />
      </div>
    </ColorContext.Provider>
  );
}
