import React from "react";
import '../style/Chessboard.css'

const Chessboard = ({value, onClick}) => {

    const horAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const vertAxis = [1, 2, 3, 4, 5, 6, 7, 8]
    let board = []

    for (let i = vertAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horAxis.length; j++) {
            const num = i + j + 1
            board.push(
                <div className={`square ${(num % 2 === 0) ? 'black-square' : 'white-square'}`}>
                    {horAxis[j] + vertAxis[i]}
                </div>
            )
        }

    }
    // console.log(board)

    return (
        <div id="chessboard">
            {board}
        </div>
    )
}

export default Chessboard