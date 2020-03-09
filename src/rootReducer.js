const INITIAL_STATE = {memes: []};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return { ...state, memes: [...state.memes, action.payload]};
    case "DELETE_MEME":
      return { ...state, memes: state.memes.filter(
        meme => meme.id !== action.payload.memeId
      )};
    default:
      console.warn("Unable to find action type: ", action.type)
      return state;
  }
}

export default rootReducer;