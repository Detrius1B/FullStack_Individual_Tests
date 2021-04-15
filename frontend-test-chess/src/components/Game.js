import '../style/Game.css';
import React, {useState} from "react";
import {Button, ButtonGroup, Grid} from "@material-ui/core";
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import Chessboard from "./Chessboard";
import {chessKnight, chessBishop, chessQueen} from '../possibleMoves'
import PlayerInfo from "./PlayerInfo";

const Game = () => {
    // examples of right moves for Knight/Bishop/Queen:
    console.log('Possible moves for Knight on F3:', chessKnight(2, 2))
    console.log('Possible moves for Bishop on F3:', chessBishop(2, 2))
    console.log('Possible moves for Queen on F3:', chessQueen(2, 2))

    const [history, setHistory] = useState([])
    const [stepNum, setStepNum] = useState(0)
    const [whiteIsNext, setWhiteIsNext] = useState(true) // white is first always
    const [boardMatrix, setBoardMatrix] = useState(Array.from({length: 8}, () => Array(8).fill(null)))

    // let boardMatrix = Array.from({length: 8}, () => Array(8).fill(null))
    function fillBoard(board) {
        const horAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].reverse()
        const vertAxis = [1, 2, 3, 4, 5, 6, 7, 8]

        for (let i = 0; i < vertAxis.length; i++) {
            for (let j = 0; j < horAxis.length; j++) {
                board[i][j] = {
                    index: i + j,
                    name: horAxis[j] + vertAxis[i],
                    // positions: {
                    //     x: i,
                    //     y: j
                    // },
                    occupied: false
                }
            }
        }
        return board
    }

    fillBoard(boardMatrix)

    let playerA = [
        {
            name: 'wK',
            img: 'assets/images/knight_w.png',
            positions: {},
            killed: false
        },
        {
            name: 'wB',
            img: 'assets/images/bishop_w.png',
            positions: {},
            killed: true
        },
        {
            name: 'wQ',
            img: 'assets/images/queen_w.png',
            positions: {},
            killed: false
        }
    ]
    let playerB = [
        {
            name: 'bK',
            img: 'assets/images/knight_b.png',
            positions: {},
            killed: true
        },
        {
            name: 'bB',
            img: 'assets/images/bishop_b.png',
            positions: {},
            killed: true
        },
        {
            name: 'bQ',
            img: 'assets/images/queen_b.png',
            positions: {},
            killed: false
        }
    ]

    // переделать для нового
    function getRandomPositions(player) {
        return player.map(piece => (
            piece.positions = {
                x: Math.floor(Math.random() * 7),
                y: Math.floor(Math.random() * 7)
            }
        ))
    }

    function samePosition(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
    }

    // const setPiecesOnBoard = () => {
    //     console.log('playerA', playerA)
    //     console.log('playerB', playerB)
    //
    //     playerA.forEach(piece => {
    //         // console.log('piece', piece)
    //         // console.log('piece.positions.x', piece.positions.x)
    //         // console.log('piece.positions.y', piece.positions.y)
    //         if (!piece.killed) {
    //             boardMatrix[piece.positions.x][piece.positions.y].occupied = piece
    //             console.log('live')
    //         } else {
    //             console.log('killed')
    //         }
    //         // console.log('occupied', boardMatrix[piece.positions.x][piece.positions.y].occupied)
    //     })
    // }

    const firstRandomStart = () => {
        getRandomPositions(playerA)
        getRandomPositions(playerB)
        // setTimeout(() => setPiecesOnBoard(), 1000)
        //
        // console.log('boardMatrix:', boardMatrix)
    }
    firstRandomStart()

    const randomMove = () => {
        // 1. make random of piece which will move (between live pieces)
        // 2. make random of positionTo
        // 3. if position is taken
        // a. kill opponent (setPieceState = 'killed')
        // 4. save old positionFrom
        // 5. put both positions into History
    }

    const startNewSimulation = () => {
        console.log('clicked')
        firstRandomStart()
        // setHistory([])
        // setTimeout(() => setPiecesOnBoard(), 1000)
        // setInterval(()=> {
        // makeMove()
        // }, 2000)
    }
    const pauseGame = () => {
    }
    const stopGame = () => {
    }

    // playing game function
    // while (!checkWinner()) {
    //     setInterval(() => {
    //         makeMove()
    //     }, 2000)
    // }

    function startGameBtn() {

        setBoardMatrix(boardMatrix)
        // if (checkWinner()) {
        //     // stopGame()
        //     return console.log('stop dude')
        // }
        // // else continue game
        // return console.log('nobody')
    }

    const showWinner = (winner) => {
        console.log('winner-', winner)
        setTimeout(() => {
            document.querySelector('#winnerPlayer').innerHTML = winner
        }, 100)
    }

    function checkWinner() {
        let statusPlayerA = playerA.filter(piece => piece.killed !== true)
        let statusPlayerB = playerB.filter(piece => piece.killed !== true)
        if (statusPlayerA.length === 0) {
            showWinner('Player B Won')
            return true
        } else if (statusPlayerB.length === 0) {
            showWinner('Player A Won')
            return true
        }
        return false
    }

    return (
        <div className="Game">
            <div id="winnerPlayer">0</div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className='infoPieces'>
                        <PlayerInfo namePlayer="playerA" pieces={playerA}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Chessboard
                        boardMatrix={boardMatrix}
                        players={{playerA, playerB}}
                    />
                </Grid>
                <Grid item xs={3}>
                    <div className='infoPieces'>
                        <PlayerInfo namePlayer="playerB" pieces={playerB}/>
                    </div>
                </Grid>
            </Grid>

            <div className="buttons">
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button id="new_simulation" onClick={startNewSimulation}>New Simulation</Button>
                    <Button id="start" onClick={() => startGameBtn()}>Start</Button>
                    <Button id="pause" onClick={() => pauseGame()}>Pause</Button>
                </ButtonGroup>
            </div>

            <div className="history-table">
                <TableContainer>
                    <Table aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Piece</TableCell>
                                <TableCell align="right">from</TableCell>
                                <TableCell align="right">to</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>piece_name</TableCell>
                                <TableCell align="right">old_pos</TableCell>
                                <TableCell align="right">new_pos</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Game