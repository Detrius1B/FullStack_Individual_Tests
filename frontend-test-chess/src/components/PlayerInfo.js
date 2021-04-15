import React from "react";
import '../style/Square.css'
import '../style/Piece.css'
// import Piece from "./Piece";

const PlayerInfo = ({namePlayer, pieces}) => {

    return (
        <>
            <h2>{namePlayer}</h2>
            {pieces.map(piece => (
                <>
                    <div className={`piece ${(piece.killed) ? 'killed' : 'live'}`}>
                        <img className="image" src={piece.img} alt=""/>
                        <p>{piece.name} {(piece.killed) ? 'killed' : 'live'}</p>
                    </div>
                </>
            ))}
        </>
    )
}

export default PlayerInfo