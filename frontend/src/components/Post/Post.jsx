import React from 'react'
import photo from "../../assets/react.svg"
import { MdEdit, MdDelete, MdClose } from "react-icons/md";


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
