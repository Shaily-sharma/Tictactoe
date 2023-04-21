import { useState } from "react";
import Board from "./Board";
import GameEnd from "./GameEnd";
const initial = "";
const Playerone = "X";
const PlayerTwo = "O";
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const TicTacToe = () => {
  const [grid, setGrid] = useState(Array(9).fill(initial));
  const [player, setPlayer] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [draw, setDraw] = useState(false);
  const newGame = () => {
    setGrid(Array(9).fill(initial));
    setGameEnd(false);
    setDraw(false);
  };


  const handleClick = (id) => {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return Playerone;
          } else {
            return PlayerTwo;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  };
  const isGameOver = () => {
    if (!gameEnd) {
      for (let i = 0; i < 8; i++) {
        if (
           grid[winner[i][0]] === Playerone && 
           grid[winner[i][1]] === Playerone && 
           grid[winner[i][2]] === Playerone
        ) {
          setGameEnd(true);
          return;
        }
      }
      for (let i = 0; i < 8; i++) {
        if (
         grid[winner[i][0]] === PlayerTwo && 
         grid[winner[i][1]] === PlayerTwo && 
         grid[winner[i][2]] === PlayerTwo
        ) {
          setGameEnd(true);
          return;
        }
      }
      if (!grid.includes(initial)) {
        setDraw(true);
        setGameEnd(true);
      }
    }
  };
  isGameOver();

  return (
    <div>
      <div className="turn"  data-testid="turntest">
        Player's Turn: {player ? Playerone : PlayerTwo}
      </div>
      {gameEnd && (
        <GameEnd  
          newGame={newGame}
          player={player}
          draw={draw}
          Playerone={Playerone}
          PlayerTwo={PlayerTwo}
        />
      )}
      <Board clickedArray={grid} handleClick={handleClick} />
    </div>
  );
};
export default TicTacToe;