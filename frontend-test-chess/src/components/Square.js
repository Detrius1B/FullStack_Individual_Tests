import React from "react";
import '../style/Square.css'
import Piece from "./Piece";

const Square = ({x, y, name, occupied}) => {

    return (
        <div id="square">
            <div className={`square ${((x+y) % 2 === 0) ? 'black-square' : 'white-square'}`}>
                <span style={{fontSize: '10px'}}>{name} ({x}-{y})</span>
                {(occupied)? <Piece piece={occupied}/> : ''}
            </div>
        </div>
    )
}

export default Square