import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { selectAllAssginCases } from '../../features/case/casestatusSlices'
import {sub} from 'date-fns'
import CaseDetails from './CaseDetails'
import { Link } from 'react-router-dom'

/**
* @author
* @function ManageCase
**/
const TCases =({asscase}) => {
    const [show , setShow] = useState(false)
    const newdate = new Date(asscase.created);
    const date = sub(newdate, { minutes: 5 }).toDateString()
  
    
     
    return(
         <tr>
           <td> {asscase.id}</td>
           <td className={(asscase.status===2)?"Completed":"Not-Processed"}> {(asscase.status===2)? "Completed" :"Not-Processed"}</td>
          <td>{date}</td> 
          <td> <Link to ={`/case-details/${asscase.userId}`}> Read+ </Link></td>     
        </tr>
       )  

      
   }
 const ManageCases = () => {
    
    const assignCases = useSelector(selectAllAssginCases) 
    
  return(
    <table>
           <tr>
             <th>Case Id</th>
             <th>Case status</th>
             <th>Modfied At</th>
             <th>Details View</th>
           </tr>
           { assignCases.map((asscase,index) => 
              <TCases asscase={asscase} key={index} />
             )}
     </table>
     )

 }

 export default ManageCases;

            /*  */
