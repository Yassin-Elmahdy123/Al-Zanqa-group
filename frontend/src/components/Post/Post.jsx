import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNewspaperStore } from "../../store/Newspaper.js";
import { toast } from "sonner";
import "./Post.scss";

const Post = ({ newspaper }) => {
  const { deleteNewspaper } = useNewspaperStore();

  const handleDelete = async (nid) => {
    try {
      const { success, message } = await deleteNewspaper(nid);

      if (success) {
        toast.success(message);
      } else {
        toast.error(message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Error deleting item");
      console.error(err);
    }
  };

  return (
    <div className="Border_div">
      <h1>{newspaper.name}</h1>

      <img src={newspaper.image} alt={newspaper.name} />

      <div className="price">{newspaper.price}</div>

      <div className="Buttons_div">
        <button className="edit">
          <MdEdit />
        </button>

        <button
          className="delete"
          onClick={() => handleDelete(newspaper._id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Post;