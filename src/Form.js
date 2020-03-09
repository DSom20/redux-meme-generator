import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import uuid from 'uuid/v4';



function Form () {
  const INITIAL_FORM_STATE = {url: "", topText: "", bottomText: ""};
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData, [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const submissionData = {
      ...formData,
      id: uuid()
    }
    dispatch({type: "ADD_MEME", payload: submissionData})
    setFormData(INITIAL_FORM_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">Image Url: </label>
      <input id="url" name="url" value={formData.url} onChange={handleChange} required></input>
      
      <label htmlFor="topText">Top Text: </label>
      <input id="topText" name="topText" value={formData.topText} onChange={handleChange} required></input>
      
      <label htmlFor="bottomText">Bottom Text: </label>
      <input id="bottomText" name="bottomText" value={formData.bottomText} onChange={handleChange} required></input>
      
      <button>Add Meme</button>
    </form>
  )
}

export default Form;