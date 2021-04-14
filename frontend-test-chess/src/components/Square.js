import React from "react";
import '../style/Square.css'

const Square = ({index, position, free}) => {

    return (
        <div id="square">
            <div className={`square ${(index % 2 === 0) ? 'black-square' : 'white-square'}`}>
                {position}
            </div>
        </div>
    )
}

export default Square