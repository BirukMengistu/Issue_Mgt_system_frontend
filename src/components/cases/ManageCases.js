import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllAssginCases } from '../../features/case/casestatusSlices'
import {sub} from 'date-fns'

/**
* @author
* @function ManageCase
**/
const TCases =({asscase}) => {
    const newdate = new Date(asscase.created);
    const date = sub(newdate, { minutes: 5 }).toDateString()
    console.log('asscase.Created' , asscase.status)
  
    
     
    return(
         <tr>
           <td> {asscase.id}</td>
           <td> {(asscase.status===2)? "Completed" :"Not Processed"}</td>
          <td>{date}</td>      
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
           </tr>
           { assignCases.map((asscase,index) => 
              <TCases asscase={asscase} key={index} />
             )}
     </table>
     )

 }

 export default ManageCases;

            /*  */
