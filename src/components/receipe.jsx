import axios from "axios";
import "../css/allreceipe.css";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';


export const Receipes = () => {
  const [receipe, setReceipe] = useState([]);

  let navigated = useNavigate();

  useEffect(() => {
    axios
    .get("https://receipe-springboot-api.up.railway.app/getAll")
    .then((resolver) => {
      console.log(resolver.data.receipes);
      setReceipe(resolver.data.receipes);
    });
  }, [])
  
  const handletheIndex = (index) => {
    navigated("/detailreceipe", {state : index})
  }

  return (
    <>
      <div className="allrecipes">
        <h1>
          ALL
          <span>
            Recipes<img src="images/splash.png"></img>
          </span>
        </h1>
      </div>
      <div className="grid-containers" id="grid-containers">
      {receipe.map((r, i) => (
          <div id="grid-item" class="grid-item">
          <img src={r.url} alt="Loag"></img>
          <div class="card_details">
            <span class="tag">{r.type}</span>
            <span class="tag">{r.category}</span>
            <div class="name">{r.foodname}</div>
            <p>{r.description}</p>
            <button key={i} onClick={() => handletheIndex(i)} id="read_more">Read More</button>
          </div>
        </div>
      ))}
      
      </div>
    </>
  );
};
