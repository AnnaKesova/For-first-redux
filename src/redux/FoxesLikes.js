import { useDispatch, useSelector } from "react-redux";
import { incremetLikes, deIncremetLikes } from "./action";

function FoxesLikes(props) {
  console.log("render>", props);

  const likes = useSelector((state) => {
    console.log("likesstate >>>>>", state);
    const { likesReducer } = state;
    return likesReducer.likes;
  });

  const dispatch = useDispatch();

  return (
    <div className="container__likes">
      <button
        className="likefox likes"
        onClick={() => dispatch(incremetLikes())}
      >
        ❤️ {likes}
      </button>
      <button
        className="likefox dislikes"
        onClick={() => dispatch(deIncremetLikes())}
      >
        💔
      </button>
    </div>
  );
}

export default FoxesLikes;
