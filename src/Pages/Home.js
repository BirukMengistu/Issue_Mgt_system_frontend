import React from 'react'
import Cases from '../components/cases/Cases';
import AddUser from '../components/users/AddUser';
import UserList from '../components/users/Userlist'
import { withRouter, useHistory } from 'react-router-dom';
import User from './User';
import AddCase from '../components/cases/AddCase';


/**
* @author Birdev
* @function Home
**/

 const Home  = (props) => {
    const [toggleShow, setToggleShow] = React.useState(true)
    

    return(
   <article>

       {
        toggleShow ? <Cases/> : <AddCase/>
       }
      <div className='post'>
          <button className='cta-button' onClick={() => 
             setToggleShow(!toggleShow)
             }>
              Add Case
          </button>
      </div>
      
   </article>)
 }

 export default Home 