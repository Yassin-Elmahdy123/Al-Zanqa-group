import React from 'react'
import "./Post.scss"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import news from '../../../public/newspaper 1.jpg';


const Post = () => {
  return (
    <div className='Border_div'>
      <h1>Paper 1</h1>
      <img src={news} alt="" />
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
