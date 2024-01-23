import {useState} from 'react';

const Square=({value,onSquareClick})=>{
  
  return (<button className="square" onClick={onSquareClick}>
            {value}
          </button>)
}


export default function Board() {
  //state
  const [squares,setSquare] =useState(Array(9).fill(null));
  const handleClick=()=>{
      const nextsquare=squares.slice();
      nextsquare[0]='X';
      setSquare(nextsquare);
  }
  return(<>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={handleClick}/>
            <Square value={squares[1]} onSquareClick={handleClick}/>
            <Square value={squares[2]} onSquareClick={handleClick}/>
          </div>
          <div className="board-row">              
            <Square value={squares[3]} onSquareClick={handleClick}/>
            <Square value={squares[4]} onSquareClick={handleClick}/>
            <Square value={squares[5]} onSquareClick={handleClick}/>
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={handleClick}/>
            <Square value={squares[7]} onSquareClick={handleClick}/>
            <Square value={squares[8]} onSquareClick={handleClick}/>
          </div>
        </>)
}
