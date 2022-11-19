import React  from 'react'
import { useSelector} from 'react-redux'
import  { selectAllCases} from "../../features/case/casesSlices";
import { CaseCard } from './CaseCard';

export const Cases = () => {
   
    const cases = useSelector(selectAllCases);
    const orderedPosts = cases.slice().sort((a, b) => b.ceatedAt.localeCompare(a.ceatedAt))
    
  return (
   
    <div className='post'>
        <table>
        <caption>List of Registerd Cases</caption>
        <tr>
        <th>Name</th>
        <th>Created At</th>
        <th>Case Description</th>
        </tr>
          {
            orderedPosts.map((tempcase,index)=>
              <CaseCard key = {index} tempcase ={tempcase}/>
            )
          }

      </table> 
    </div>
  )
}

export default Cases
 