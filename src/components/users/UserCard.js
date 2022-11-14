import React  from 'react'



export const UserCard = ({tempuser}) => {
   
  
  return (
    <div className='post'>
        <div>
        <strong> Name :- {tempuser.firstName} {tempuser.secondName}</strong>   
        
        </div>
             <span>Email : {tempuser.email}</span> 
          <hr/>
    </div>
  )
}