import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { commentCreate, commentsLoads } from "./action";
import SingleCommet from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    //   console.log('redux state >', state)
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispath = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit textComment>>", textComment);
    const id = uniqid();
    dispath(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispath(commentsLoads());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type="text"
          value={textComment}
          onChange={handleInput}
          className="input__forInput input__value"
        />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleCommet key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Comments;
