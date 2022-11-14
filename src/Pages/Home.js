import React from 'react'
import Cases from '../components/cases/Cases';
import AddUser from '../components/users/AddUser';
import UserList from '../components/users/Userlist'
import { withRouter, useHistory } from 'react-router-dom';
import User from './User';


/**
* @author Birdev
* @function Home
**/

 const Home  = (props) => {
    const [toggleShow, setToggleShow] = React.useState(false)
    

    return(
   <article>

       {
        toggleShow? <Cases/> : <AddUser/>
       }
      <div className='post'>
          <button className='cta-button' onClick={() => 
             setToggleShow(!toggleShow)
             }>
              Case Manage
          </button>
      </div>
      
   </article>)
 }

 export default Home 