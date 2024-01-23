import {useState} from 'react';

const Square=({value,onSquareClick})=>{
  
  return (<button className="square" onClick={onSquareClick}>
            {value}
          </button>)
}


export default function Board() {
  //state
  const [xIsNext,setxIsNext]= useState(true);
  const [squares,setSquare] = useState(Array(9).fill(null));
  const handleClick=(i)=>{
      //checking whether there is X or O
      if(squares[i]){return;}
      //making a copy of board array
      const nextsquare=squares.slice();
      //Switching from X and O
      if(xIsNext){
        nextsquare[i]="X";
      }else{
        nextsquare[i]="O";
      }
      setSquare(nextsquare);
      setxIsNext(!xIsNext);
  }
  return(<>
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
        </>)
}
