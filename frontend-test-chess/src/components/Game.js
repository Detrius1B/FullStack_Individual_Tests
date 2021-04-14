import '../style/Game.css';
import React, {useState} from "react";
import {Button, ButtonGroup, Grid} from "@material-ui/core";
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import Chessboard from "./Chessboard";
import Piece from "./Piece";

const Game = () => {
    const [history, setHistory] = useState([])
    const [stepNum, setStepNum] = useState(0)
    const [whiteIsNext, setWhiteIsNext] = useState(true) // white is first always

    let playerA = [
        {
            name: 'wK',
            img: 'assets/images/knight_w.png',
            killed: false
        },
        {
            name: 'wB',
            img: 'assets/images/bishop_w.png',
            killed: true
        },
        {
            name: 'wQ',
            img: 'assets/images/queen_w.png',
            killed: false
        }
    ]

    let playerB = [
        {
            name: 'bK',
            img: 'assets/images/knight_b.png',
            positions: getRandomPositions(),
            killed: true
        },
        {
            name: 'bB',
            img: 'assets/images/bishop_b.png',
            killed: true
        },
        {
            name: 'bQ',
            img: 'assets/images/queen_b.png',
            killed: false
        }
    ]

    let position = {}

    function getRandomPositions() {
        return {
                x: Math.floor(Math.random() * 7),
                y: Math.floor(Math.random() * 7)
            }
    }
    const firstRandomStart = () => {
        // getRandomPositions(playerA)
    }

    firstRandomStart()
    console.log(playerA)
    console.log(playerB)

    const randomMove = () => {
        // 1. make random of piece which will move (between live pieces)
        // 2. make random of positionTo
        // 3. if position is taken
            // a. kill opponent (setPieceState = 'killed')
        // 4. save old positionFrom
        // 5. put both positions into History
    }

    const startNewSimulation = () => {
        firstRandomStart()
        // setInterval(()=> {
        // }, 2000)
    }
    const pauseGame = () => {
    }
    const stopGame = () => {
    }

    function startGame() {
        if (checkWinner()) {
            // stopGame()
            return console.log('stop dude')
        }
        // else continue game
        return console.log('nobody')
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
                        <h2>Player A</h2>
                        {playerA.map(piece => (
                            <Piece
                                // key={piece.}
                                name={piece.name}
                                image={piece.img}
                                positions={piece.positions}
                                killed={piece.killed}
                            />
                        ))}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Chessboard/>
                </Grid>
                <Grid item xs={3}>
                    <div className='infoPieces'>
                        <h2>Player B</h2>
                        {playerB.map(piece => (
                            <Piece
                                // key={piece.}
                                name={piece.name}
                                image={piece.img}
                                killed={piece.killed}
                            />
                        ))}
                    </div>
                </Grid>
            </Grid>

            <div className="buttons">
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button id="new_simulation" onClick={() => startNewSimulation()}>New Simulation</Button>
                    <Button id="start" onClick={() => startGame()}>Start</Button>
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