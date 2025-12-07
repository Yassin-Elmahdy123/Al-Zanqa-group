import React from 'react'
import Post from '../../components/Post/Post'
import "./PublishPage.scss"
import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PublishPage = () => {
  return (
    <>
      <div className='headers'>
        <h1>Current News</h1>
        <FaNewspaper className='news-icon'/>
      </div>
      <div className='headers'>
        <h2>No products found</h2>
        <Link className='create-link'>Create a product</Link>
      </div>
    </>
  )
}

export default PublishPage
