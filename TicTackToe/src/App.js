import {useState} from 'react';

const Square=({value,onSquareClick})=>{
  
  return (
  <button className="square" onClick={onSquareClick}>
            {value}
          </button>);
}


const Board=({ xIsNext, squares, onPlay })=>{
  const handleClick=(i)=>{
      //checking whether there is X or O
      //if there is occupied it will early return of handleClick
      //in facts it returns nothing.
      if(squares[i] || calcWinner(squares)){return;}
      //if there is an empty squre
      //making a copy of board array
      const nextsquare=squares.slice();
      //check whether it's X or O turns
      if(xIsNext){
        nextsquare[i]="X";
      }else{
        nextsquare[i]="O";
      }
      //fills the square
      onPlay(nextsquare);
  }
   //winner
   const winner=calcWinner(squares);
   let status;
   if(winner){
     status="Winner:"+winner;
   }else{
     status="Next Player:"+(xIsNext?"X":"O");
   }
  return(
        <div>
          <div className='status'>{status}</div>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
          </div>
          <div className="board-row">              
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
          </div>
        </div>);
}
export default function Game(){
  const [xIsNext,setxIsNext]=useState(true);
  const [history,setHistory]=useState([Array(9).fill(null)]);
  const currentSquares=history[history.length-1];
  const handlePlay=(nextSquares)=>{
      setHistory([...history,nextSquares]);
      setxIsNext(!xIsNext);
    }
  return(
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>{/*To-Do */}</ol>
      </div>
    </div>
  );
}

function calcWinner(squares){
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c]=lines[i];
    if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}



