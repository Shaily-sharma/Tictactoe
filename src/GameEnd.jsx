const GameEnd = ({ newGame, player, draw, Playerone, PlayerTwo }) => {
    return (
      <div className="gameend" >
        
        {!draw && (
          <span className="winner " >
            Player {player ? PlayerTwo : Playerone} Win!
          </span>
        )}
        {draw && <span className="winner ">Draw</span>}
        <button data-testid="newGame" className="btn" onClick={newGame} >
          New Game
        </button>
      </div>
    );
  };
  export default GameEnd;
  