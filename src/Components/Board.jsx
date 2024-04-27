import { useState } from "react";
import Square from "./Square";
import { WinnerChecker } from "../Helper/WinnerChecker";
export default function Board(){
    const [next,setNext]=useState('X');
    const [squares,setSquares]=useState(Array(9).fill(null));
    function handleClick(i){
        const nextSqrs=squares.slice(0);
        nextSqrs[i]=(nextSqrs[i]===null?next:nextSqrs[i]);
        setNext(next==='X'?'O':'X');
        setSquares(nextSqrs);
        console.log(squares);
    }
    return (
        <>
     
  {WinnerChecker(squares)  }

        <div className="board-row">
            <Square val={squares[0]} chgSqr={()=>handleClick(0)} />
            <Square val={squares[1]} chgSqr={()=>handleClick(1)}/>
            <Square val={squares[2]} chgSqr={()=>handleClick(2)}/>
        </div>  <div className="board-row">
            <Square val={squares[3]} chgSqr={()=>handleClick(3)} />
            <Square val={squares[4]} chgSqr={()=>handleClick(4)}/>
            <Square val={squares[5]} chgSqr={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square val={squares[6]} chgSqr={()=>handleClick(6)}/>
            <Square val={squares[7]} chgSqr={()=>handleClick(7)}/>
            <Square val={squares[8]} chgSqr={()=>handleClick(8)}/>
        </div>
        </>
    );
}