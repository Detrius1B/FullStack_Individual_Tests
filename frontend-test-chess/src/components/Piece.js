import React from "react";
import '../style/Piece.css'

const Piece = ({name, image, killed}) => {
    return (
        <div className={`piece ${(killed) ? 'killed' : 'live'}`}>
            <img className="image" src={image} alt=""/>
            <p>{name} {(killed) ? 'killed' : 'live'}</p>
        </div>
    );
}

export default Piece