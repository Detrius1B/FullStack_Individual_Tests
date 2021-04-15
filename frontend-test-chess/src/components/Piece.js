import React, {useState} from "react";
import '../style/Piece.css'

const Piece = ({piece}) => {
    let {name, img, positions, killed} = piece
    // const [pieceState, setPieceState] = useState('live');
    // function killPiece(killed) {
    //     setPieceState((killed) ? 'killed' : 'live')
    // }
    //
    const pieceState = (killed) ? 'killed' : 'live'

    return (
        <div className={`piece ${pieceState}`}>
            <img className="image" src={img} alt=""/>
            <p>{name} {pieceState}</p>
        </div>
    );
}

export default Piece