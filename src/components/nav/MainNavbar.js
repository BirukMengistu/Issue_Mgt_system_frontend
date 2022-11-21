import React from 'react'
import {Link} from 'react-router-dom'
import './navbar-styles.css'
/**
* @author
* @function MainNavbar
**/
const myFunction=() =>{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
export const MainNavbar = () => {
  return(
    
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active"> Home </Link>
      <Link to="/user" > User list </Link>
          <div class="dropdown">
              <button class="dropbtn">Cases 
                <div><i class="fa fa-caret-down"></i></div>
              </button>
                  <div class="dropdown-content">
                        <Link to="/add-issue"> AddCase </Link>
                        <Link to="/modifiy-case"> Modifiy-Case </Link>
                        <Link to="/case-status"> CaseStatus </Link>
                        <Link to="/case-resolved"> Completed-Case </Link>
                  </div>
              
          </div>

        <Link to="/aboutus"> About-us </Link>
      <div>
      <Link  className="icon" onClick={myFunction}> &#9776;</Link>
      </div>
     </div>
   )

 }


 export default MainNavbar 

