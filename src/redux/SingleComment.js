import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentUpdate, commentDelete } from "./action";

function SingleCommet({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("submit ->>>", commentText);
    dispatch(commentUpdate(commentText, id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input
        type="text"
        value={commentText}
        onChange={handleInput}
        className="input__value"
      />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleCommet;
