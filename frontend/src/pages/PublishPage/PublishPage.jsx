import React, { useEffect } from 'react'
import Post from '../../components/Post/Post'
import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNewspaperStore } from '../../store/Newspaper';

const PublishPage = () => {
  const { fetchNewspaper, newspapers } = useNewspaperStore();
  
  useEffect(() => {
    fetchNewspaper();
  }, [fetchNewspaper]);
  
  console.log(newspapers);
  
  return (
    <>
      <div className='headers'>
        <h1>Current News</h1>
        <FaNewspaper className='news-icon'/>
      </div>
      
      {newspapers.map((newspaper) => (
        <Post 
          key={newspaper.id}
          ></Post>))}

      {newspapers.length === 0 && (
        <div className='headers'>
          <h2>No products found</h2>
          <Link className='create-link'>Create a product</Link>
        </div>
      )
      } 
    </>
  )
}

export default PublishPage
