import React  from 'react'
import { useSelector} from 'react-redux'
import  { selectAllUsers} from "../../features/user/usersSlices";
import Cases from '../cases/Cases';

import { UserCard } from './UserCard';

export const UserList = () => {
   
    const users = useSelector(selectAllUsers);
    
  return (
    <> 
     <div className='post'>
    <h2>User</h2>
      {users.map( (tempuser , index) =>

         <UserCard  tempuser ={tempuser} key={index}/>
            
        )}  
    </div> 
   </>
   
  )
}

export default UserList

/* */