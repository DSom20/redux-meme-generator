import React from 'react';
import { useSelector } from "react-redux";
import Meme from "./Meme";

function MemeList () {

  const memes = useSelector(store => store.memes);

  const memesJsx = memes.map(meme => (
    <Meme 
      key={meme.id}
      id={meme.id}
      url={meme.url} 
      topText={meme.topText} 
      bottomText={meme.bottomText}/>)
  )

  return (
    <div className="MemeList">
      {memesJsx}
    </div>
  )
}

export default MemeList;