const Board = ({ clickedArray, handleClick }) => {
     return (
       <div className="board" data-testid="board">
         {clickedArray && clickedArray.map((item, index) => {
           if (item === "") {
             return (
               <div
                 key={index}
                 className="square"
                 data-testid="handl"
                 onClick={() => handleClick(index)}
               >
                 {item}
               </div>
             );
           } else {
             return (
               <div key={index} className="square clicked">
                 {item}
               </div>
             );
           }
         })}
       </div>
     );
   };
   export default Board;
   