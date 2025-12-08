import { useState } from "react";
import { useNewspaperStore } from "../../store/Newspaper.js";
import { toast } from "sonner";
import "./Create.scss";

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
    if (success) {
      toast.success(message)
    }else{
      toast.error(message)
    }
    setNewNewspaper({
      name: "",
      price: "",  
      date: "",
      image: ""
    });
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
          placeholder="Image URL"
          type="text" 
          name="image"
          value={newNewspaper.image} 
          onChange={(e) => setNewNewspaper  ({...newNewspaper, image: e.target.value })}
        />
        
        <input 
          placeholder= "Date" 
          type="date"
          name="date" 
          value={newNewspaper.date} 
          onChange={(e) => setNewNewspaper  ({...newNewspaper, date: e.target.value })}
        />
        
        <button onClick={handleCreate}>
          Create
        </button>
      </div>
    </>
  );
};

export default CreatePage;
