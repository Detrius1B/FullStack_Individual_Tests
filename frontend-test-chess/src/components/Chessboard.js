import React from "react";
import '../style/Chessboard.css'
import Piece from "./Piece";
import Square from "./Square";

const Chessboard = ({value, onClick}) => {

    const horAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const vertAxis = [1, 2, 3, 4, 5, 6, 7, 8]
    let board = []

    for (let i = vertAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horAxis.length; j++) {
            const num = i + j + 1
            board.push({
                index: num,
                name: horAxis[j] + vertAxis[i],
                positions: {
                    x: i,
                    y: j
                },
                free: true
            })
        }

    }

    return (
        <div id="chessboard">
            {board.map(square => (
                <Square index={square.index} name={square.name} positions={square.positions} free={square.free}/>
            ))}

        </div>
    )
}

export default Chessboard