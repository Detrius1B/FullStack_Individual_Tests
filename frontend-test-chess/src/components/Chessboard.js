import React from "react";
import '../style/Chessboard.css'
import Piece from "./Piece";
import Square from "./Square";

const Chessboard = ({value, onClick}) => {

    const horAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const vertAxis = [1, 2, 3, 4, 5, 6, 7, 8]
    let board = []

    const square = {
        name: '',
        free: true
    }

    // наполнять объектами
    for (let i = vertAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horAxis.length; j++) {
            const num = i + j + 1
            board.push({
                index: num,
                position: horAxis[j] + vertAxis[i],
                free: true
            })
        }

    }
    console.log(board)

    return (
        <div id="chessboard">
            {board.map(square => (
                <Square index={square.index} position={square.position} free={square.free}/>
            ))}

        </div>
    )
}

export default Chessboard