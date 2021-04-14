import React from "react";
import '../style/Square.css'

const Square = ({index, name, positions, free}) => {

    return (
        <div id="square">
            <div className={`square ${(index % 2 === 0) ? 'black-square' : 'white-square'}`}>
                {name} --
                {positions.x}.{positions.y}
                {
                    // (free)? '' : <Piece />
                }
            </div>
        </div>
    )
}

export default Square