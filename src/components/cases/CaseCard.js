import React  from 'react'
import {sub} from 'date-fns'

export const CaseCard = ({tempcase}) => {
  const newdate = new Date(tempcase.ceatedAt);
  const date = sub(newdate, { minutes: 5 }).toDateString()
  
  return (
    <div className='post'>
        <div>
        <strong> Name :- {tempcase.title}</strong>  
         </div>
         <span>Created at: {date}</span> 
        <div>
        <span>{tempcase.caseDescription}</span>
        </div>
        <hr/>
    </div>
  )
} 