import React from 'react'
import AddUser from '../components/users/AddUser';
import UserList from '../components/users/Userlist'
/**
* @author Birdev
* @function User
**/

 const User  = (props) => {
    var toggleButton = true;
   const handleNewUser=()=>{
    console.log('display onclik')
        

     }
  return(
    <article>
        
       {!toggleButton?
        <div>
             <UserList />
             <button onClick={handleNewUser}> Add_New_User </button>
        </ div>
     :
     <div>
          <AddUser/>
          <UserList />
        </div>
    }
    </article>
   )
 }

 export default User 