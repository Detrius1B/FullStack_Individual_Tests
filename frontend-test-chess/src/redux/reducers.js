import { pieceActions } from "./actions"

const initialState = {
  piece: null
}

const setPiece = (state, data) => (
  { ...state, piece: data }
)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case pieceActions.SET_PIECE:
      return setPiece(state, action.data)
    default:
      return { ...state }
  }
}

export default reducer