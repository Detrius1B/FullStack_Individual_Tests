import React, {useState} from "react";
import '../style/Chessboard.css'
import Square from "./Square";

const Chessboard = ({boardMatrix, players}) => {
    const {playerA, playerB} = players
    const setPiecesOnBoard = () => {
        // console.log('playerA', playerA)
        // console.log('playerB', playerB)

        playerA.forEach(piece => {
            if (!piece.killed) {
                boardMatrix[piece.positions.x][piece.positions.y].occupied = piece
            }
        })
        playerB.forEach(piece => {
            if (!piece.killed) {
                boardMatrix[piece.positions.x][piece.positions.y].occupied = piece
            }
        })
    }
    setPiecesOnBoard()

    return (
        <div id="chessboard">
            {boardMatrix.map((row, indexX) => (
                row.map((square, indexY) => (
                    <Square
                        x={indexX}
                        y={indexY}
                        name={square.name}
                        occupied={square.occupied}
                    />
                ))
            ))}
        </div>
    )
}

export default Chessboard