import React, {useState} from "react";
import '../style/Piece.css'

const Piece = ({name, image, positions, killed}) => {
    // const [pieceState, setPieceState] = useState('live');
    //
    // function killPiece(killed) {
    //     setPieceState((killed) ? 'killed' : 'live')
    // }
    //
    const pieceState = (killed) ? 'killed' : 'live'

    return (
        <div className={`piece ${pieceState}`}>
            <img className="image" src={image} alt=""/>
            <p>{name} {pieceState}</p>
        </div>
    );
}

export default Piece