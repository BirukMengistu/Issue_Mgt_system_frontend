import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllAssginCases } from '../../features/case/casestatusSlices'
import {sub} from 'date-fns'
/**
* @author
* @function ManageCase
**/
const TCasestwo =({asscase}) => {
    const newdate = new Date(asscase.created);
    const date = sub(newdate, { minutes: 5 }).toDateString()
    

    
     
    return(
         <tr>
           <td> {asscase.id}</td>
           <td> {(asscase.status===2)? "Completed" :"Not Processed"}</td>
          <td>{date}</td>      
        </tr>
       )  

      
   }
 const CompletedCase = () => {
    
    const assignCases = useSelector(selectAllAssginCases) 
    const completedcase = assignCases.filter(casetemp=> casetemp.status===2)
    const orderedPosts = completedcase.slice().sort((a, b) => b.created.localeCompare(a.created))

  return(
    <table>
           <tr>
             <th>Case Id</th>
             <th>Case status</th>
             <th>Modfied At</th>
           </tr>
           { orderedPosts.map((asscase,index) => 
              <TCasestwo asscase={asscase} key={index} />
             )}
     </table>
     )

 }

 export default CompletedCase;