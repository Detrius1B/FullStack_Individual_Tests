const pieceActions = {
  SET_PIECE: "SET_PIECE",

  setPiece: (data) => ({
    type: pieceActions.SET_PIECE,
    data
  })
}

export { pieceActions }