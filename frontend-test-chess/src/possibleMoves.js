export function chessKnight(x, y) {
    let possibleKnightCoordinates = [];

    // all possible X positions
    let xPositions = [x + 2, x - 2, x + 1, x - 1].filter(cellPosition => (cellPosition >= 0 && cellPosition < 8))
    // all possible Y positions
    let yPositions = [y + 2, y - 2, y + 1, y - 1].filter(cellPosition => (cellPosition >= 0 && cellPosition < 8))

    for (let i = 0; i < xPositions.length; i++) {
        for (let j = 0; j < yPositions.length; j++) {
            if (Math.abs(x - xPositions[i]) + Math.abs(y - yPositions[j]) === 3) {
                if (!possibleKnightCoordinates.includes([xPositions[i], yPositions[j]])) {
                    possibleKnightCoordinates.push([yPositions[j], xPositions[i]])
                }
            }
        }
    }

    return possibleKnightCoordinates;
}

export function chessBishop(x, y) {
    let possibleBishopCoordinates = []
    let dx = [-1, -1, 1, 1]
    let dy = [-1, 1, -1, 1]

    for (let dir = 0; dir < 4; dir++) {
        for (let moves = 1; moves < 8; moves++) {
            // where the bishop will be after moving number of squares
            let new_x, new_y
            new_x = x + dx[dir] * moves
            new_y = y + dy[dir] * moves

            // if the square-move not outside of the board
            if (new_x >= 0 && new_x < 8 && new_y >= 0 && new_y < 8) {
                possibleBishopCoordinates.push([new_y, new_x])
            }
        }
    }

    return possibleBishopCoordinates
}

export function chessQueen(x, y) {
    let bishopMoves = chessBishop(x, y)
    let possibleQueenCoordinates = []
    possibleQueenCoordinates = [...bishopMoves]

    let dx = [-1, 0, 1, 0]
    let dy = [0, -1, 0, 1]

    for (let dir = 0; dir < 4; dir++) {
        for (let moves = 1; moves < 8; moves++) {
            // where the queen will be after moving number of squares
            let new_x, new_y
            new_x = x + dx[dir] * moves
            new_y = y + dy[dir] * moves

            // if the square-move not outside of the board
            if (new_x >= 0 && new_x < 8 && new_y >= 0 && new_y < 8) {
                possibleQueenCoordinates.push([new_y, new_x])
            }
        }
    }


    return possibleQueenCoordinates
}
