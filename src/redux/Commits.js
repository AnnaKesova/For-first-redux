import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoads } from "./action";
import SingleCommet from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    //   console.log('redux state >', state)
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  console.log("comments >", comments);

  const dispath = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit textComment>>", textComment);

    dispath(commentCreate(textComment));
  };

  useEffect(() => {
    dispath(commentsLoads());
  }, []);

  //console.log("comments>>>", comments)

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
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
