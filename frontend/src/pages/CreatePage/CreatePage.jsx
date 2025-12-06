import React from "react";
import { useState } from "react";
import { useNewspaperStore } from "../../store/Newspaper.js";
import "./CreatePage.scss";

const CreatePage = () => {
  const [ newNewspaper, setNewNewspaper ] = useState({
    name: "",
    price: "",
    date: "",
    image: ""
  });
  
  const { createNewspaper } = useNewspaperStore()
  
  const handleCreate = async() => {
    const {success, message} = await createNewspaper(newNewspaper);
    console.log("Success:", success);
    console.log("Message:", message);
  }
  
  return (
    <>
      <div className="creation_box">
        <h2>Create product</h2>
        
        <input 
          placeholder= "Title" 
          type="text" 
          name="name" 
          value={newNewspaper.name} 
          onChange={(e) => setNewNewspaper  ({...newNewspaper, name: e.target.value })}
        />
        
        <input
          placeholder="Price" 
          type="number" 
          name="price" 
          value={newNewspaper.price} 
          onChange={(e) => setNewNewspaper  ({...newNewspaper, price: e.target.value })}
        />
        
        <input 
          placeholder="Image" 
          type="text" 
          name="image" 
          value={newNewspaper.image} 
          onChange={(e) => setNewNewspaper  ({...newNewspaper, image: e.target.value })}
        />
        
        <input 
          placeholder= "Date" 
          type="text" 
          name="date" 
          value={newNewspaper.date} 
          onChange={(e) => setNewNewspaper  ({...newNewspaper, date: e.target.value })}
        />
        
        <button onClick={handleCreate}>
          jlfk
        </button>
      </div>
    </>
  );
};

export default CreatePage;
