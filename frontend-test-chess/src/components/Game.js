import '../style/Game.css';
import React from "react";
import {Button, ButtonGroup, Grid} from "@material-ui/core";
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import Chessboard from "./Chessboard";
import Piece from "./Piece";

const Game = () => {

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
            killed: false
        },
        {
            name: 'bB',
            img: 'assets/images/bishop_b.png',
            killed: false
        },
        {
            name: 'bQ',
            img: 'assets/images/queen_b.png',
            killed: true
        }
    ]

    let position = {}

    const firstRandomStart = () => {
    }

    return (
        <div className="Game">

            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className='infoPieces'>
                        <h2>Player A</h2>
                        {playerA.map(piece => (
                            <Piece
                                // key={piece.}
                                name={piece.name}
                                image={piece.img}
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
                    <Button id="new_simulation">New Simulation</Button>
                    <Button id="start">Start</Button>
                    <Button id="pause">Pause</Button>
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