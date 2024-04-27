
import './Square.css'
export default function Square({val,chgSqr}){
   
   
    return (
        <button className="square" onClick={chgSqr} >{val}</button>
    );
}