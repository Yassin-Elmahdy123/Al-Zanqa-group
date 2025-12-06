import React from 'react'
import "./Post.scss"
import photo from "../../assets/react.svg"
const Post = () => {
  return (
    <div className='Border_div'>
      <h1>Paper 1</h1>
      <img src={photo} alt="" />
      <div className='Buttons_div'>
        
        <button id="edit" >
          <MdEdit />
        </button>
        
        <button id="delete" >
          <MdDelete />
        </button>
        
      </div>
    </div>
  )
}

export default Post
