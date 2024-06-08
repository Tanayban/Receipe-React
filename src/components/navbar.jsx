import "../css/top.css";
import {BrowserRouter as Router, Link, Route, useNavigate} from 'react-router-dom';

export const Navbar = () => {
  let navigated = useNavigate();

  const uploadnav = () => {
    navigated("/uploadreceipe");
  }

  return(
    <nav className="navbar">
         <div className="logo">Receipe</div>
         <ul className="nav-links" id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/recipe">Recipes</Link></li>
            <li>
              <div className="dropdown">
                <a href="#categories">Categories</a>
              <ul className="categories">
                <li><a href="#categories" id="break">Breakfast</a></li>
                <li><a href="#categories" id="lun">Lunch</a></li>
                <li><a href="#categories" id="din">Dinner</a></li>
                <li><a href="#categories" id="dess">Dessert</a></li>
              </ul>
              </div>
            </li>
            <li><button onClick={uploadnav} id="login" class="btn_nav">Log In</button>
                <button id="logout" class="btn_nav">Log Out</button>
            </li>
            <div class="btn-toggle">
          <i class="fas fa-bars"></i>
          <a></a>
        </div>
        </ul>
    </nav>
  ) 
}
