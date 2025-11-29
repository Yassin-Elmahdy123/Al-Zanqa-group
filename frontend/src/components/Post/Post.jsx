import React from 'react'
import "./Post.css"
import photo from "../../assets/react.svg"
const Publish = () => {
  return (
    <div className='Border_div'>
      <h1>Paper 1</h1>
      <img src={photo} alt="" />
      <div className='Buttons_div'>
        
        <button id="edit" >
          <img src="" alt="" />
        </button>
        
        <button id="delete" >
          <img src="" alt="" />
        </button>
        
      </div>
    </div>
  )
}

export default Publish
