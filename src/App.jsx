import { useState } from "react";
import GenerateImages from "./GenerateImages";
import Shuffle from "./Shuffle";

export default function App() {
  const [images, setImages] = useState(GenerateImages());
  const [guessed, setGuessed] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function shuffleImages() {
    setImages((prevImages) => Shuffle(prevImages));
  }

  function updateHighScore() {
    if (score > highScore) {
      setHighScore(score);
    }
  }

  function addToGuessed(player) {
    if (!guessed.includes(player)) {
      setGuessed((prevGuessed) => [...prevGuessed, player]);
      setScore(score + 1);
    } else {
      updateHighScore();
      setGuessed([])
      setScore(0);
      alert("GAMEOVER");
    }
  }

  return (
    <div className="main">
      <h1>NBA Player Guessing Game</h1>
      <button onClick={shuffleImages}>Shuffle</button>
      <h4>Score: {score}</h4>
      <h4>High score: {highScore}</h4>
      <div className="cards">
        {images.map((player, index) => {
          return (
            <img
              key={index}
              src={player.imageURL}
              className="card"
              id={index}
              onClick={() => {
                shuffleImages();
                addToGuessed(player);
                console.log(guessed);
                console.log(score);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
