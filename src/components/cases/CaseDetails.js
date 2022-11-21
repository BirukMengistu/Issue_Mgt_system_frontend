import React from 'react'
import { selectAllUsers } from '../../features/user/usersSlices';
import { selectAllAssginCases } from '../../features/case/casestatusSlices';
import { selectAllCases } from '../../features/case/casesSlices';
import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import {sub} from 'date-fns'
/**
* @author
* @function CaseDetails
**/

const CaseDetails = () => {
 const users= useSelector(selectAllUsers)
 const cases= useSelector(selectAllCases)
 const assginCaseUsers = useSelector(selectAllAssginCases)
 
 const {id} = useParams()

 const assignCase = assginCaseUsers.filter((caseTemp) => caseTemp.id == id ) 
 const caseTest = cases.filter((case1) => case1.id == assignCase[0].caseId )
 const user = users.filter((user) => user.id == assignCase[0].userId ) 
 
 const newdate = new Date(assignCase[0].modified);
 const date = sub(newdate, { minutes: 5 }).toDateString()
 console.log('case-status', assignCase[0].status)
  return(
    <div className='homePage'>
        <h2>Case Datals page</h2>
        <div className='post'>
            <h3>case Asign to : {user[0].firstName} {user[0].secondName}</h3>
            <strong>Contact Address : {user[0].email} </strong>
        </div>
       
        <h2>Case Info</h2>
        <div className='post'>
            <h3>Title : {caseTest[0].title} </h3>
            <div><strong> Case description: {date} </strong></div>
            <strong> Status :  {((assignCase[0].status) === 2)? <i className='fa fa-check-circle'>Completed</i>: <i class="fa fa-exclamation-circle" aria-hidden="true"> Not-Processed</i>} </strong>
        </div>
    </div>
   )

 }

 export default CaseDetails;