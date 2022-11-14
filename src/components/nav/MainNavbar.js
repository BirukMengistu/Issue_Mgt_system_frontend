import React from 'react'
import {Link} from 'react-router-dom'
/**
* @author
* @function MainNavbar
**/

export const MainNavbar = (props) => {
  return(
    <nav>
    <Link to="/"> Home </Link>
    <Link to="/user"> User list </Link>
    <Link to="/add-issue"> AddIssue </Link>
    <Link to="/casestatus"> CaseStatus </Link>
    <Link to="/Completed-Case"> Completed-Case </Link>
  </nav>
   )

 }


 export default MainNavbar 