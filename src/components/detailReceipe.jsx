import { useLocation } from "react-router-dom";
import "../css/detailreceipe.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const DetailReceipe = () => {
  const [detailreceipe, setdetailreceipe] = useState({
    foodname: "",
    ingredient: "",
    description: "",
    id: "",
    history: "",
    category: "",
    type: "",
    url: "",
    preparation: ""
  });  
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    axios.get("https://receipe-springboot-api.up.railway.app/getAll").then((resolver) => {
      setdetailreceipe(resolver.data.receipes[data]);
      console.log(resolver.data.receipes[data])
  })
  }, [])
  

  return (
    <>
      <div className="card">

      <div className="card-image">
          <img src={detailreceipe.url} alt=""></img>
        </div>

        <div className="card-content">
          <div className="blog-details">
            <span className="tag">{detailreceipe.type}</span>

            <span className="tag">{detailreceipe.category}</span>
          </div>

          <h2 className="blog-title">{detailreceipe.foodname}</h2>

          <p className="excerpt">{detailreceipe.description}</p>

          <div className="blog-cta">
            <button className="view-more">
              View More
              <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};
