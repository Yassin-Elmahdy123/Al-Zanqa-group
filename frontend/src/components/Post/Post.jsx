import React from "react";
import "./Post.scss";
import { MdEdit, MdDelete, MdClose } from "react-icons/md";
import { useNewspaperStore } from "../../store/Newspaper.js";
import { toast } from "sonner";

const Post = ({ newspaper }) => {
  const { deleteNewspaper } = useNewspaperStore();

  const handleDelete = async (nid) => {
    const { success, message } = await deleteNewspaper(nid);
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="Border_div">
      <h1>{newspaper.name}</h1>
      <img src={newspaper.image} alt={newspaper.name} />
      <div>{newspaper.price}</div>
      <div className="Buttons_div">
        <button id="edit">
          <MdEdit />
        </button>

        <button id="delete" onClick={() => handleDelete(newspaper._id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Post;
