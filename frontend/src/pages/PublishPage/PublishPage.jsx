import React, { useEffect } from 'react'
import Post from '../../components/Post/Post'
import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNewspaperStore } from '../../store/Newspaper';

const fetchNewspaper = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/newspapers");
    const data = await res.json();

    setNewspapers(data);
  } catch (error) {
    console.error("Error fetching newspapers:", error);
  }
};


const PublishPage = () => {
  const { fetchNewspaper, newspapers } = useNewspaperStore();
  
  useEffect(() => {
    fetchNewspaper();
  }, [fetchNewspaper]);
  
  console.log(newspapers);
  
  return (
    <>
      <div className='headers'>
        <FaNewspaper className='news-icon'/>
        <h1>Current News</h1>
      </div>
      
      <div>
        {newspapers.map((newspaper) => (
          <Post key={newspaper._id} newspaper={newspaper} />
        ))}
      </div>
      
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
