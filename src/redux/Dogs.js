import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogsLoads, } from "./action";

function Dogs(props) {

    const image = useSelector(state => {
      console.log('state >>>>>', state)
      const {dogsReducer} = state;
      return dogsReducer.src
  })

    const dispath = useDispatch();

    useEffect (() => {
      dispath(dogsLoads());
      
  }, []);

  return (
    <div className="container__dogs">
    {image && <img src={image}></img>}
    </div>
  );

}

export default Dogs;