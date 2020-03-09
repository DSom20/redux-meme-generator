import React from 'react';
import { useDispatch } from "react-redux";


function Meme (props) {
  const dispatch = useDispatch();

  const style = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${props.url})`
  }

  const handleClick = (evt) => {
    const memeId = evt.target.dataset.memeId
    dispatch({type: "DELETE_MEME", payload: { memeId }})
  }

  return (
    <div style={style} className="Meme">
      <div className="Meme-topText">{props.topText}</div>
      <div className="Meme-bottomText">{props.bottomText}</div>
      <button onClick={handleClick} data-meme-id={props.id}>Delete</button>
    </div>
  )
}

export default Meme;