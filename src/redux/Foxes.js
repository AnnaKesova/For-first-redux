import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foxesLoads } from "./action";

function Foxes(props) {
  const image = useSelector((state) => {
    console.log("state >>>>>", state);
    const { foxesReducer } = state;
    return foxesReducer.src;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(foxesLoads());
  }, []);

  return (
    <div className="container__dogs">
      {image && <img className="card__dog" src={image}></img>}
    </div>
  );
}

export default Foxes;
