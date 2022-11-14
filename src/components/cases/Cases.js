import React  from 'react'
import { useSelector} from 'react-redux'
import  { selectAllCases} from "../../features/case/casesSlices";
import { CaseCard } from './CaseCard';

export const Cases = () => {
   
    const cases = useSelector(selectAllCases);
    const orderedPosts = cases.slice().sort((a, b) => b.ceatedAt.localeCompare(a.ceatedAt))
     console.log('cases-component',cases)
  return (
    <div className='post'>
        <h2>New Case</h2>
          {
            orderedPosts.map((tempcase,index)=>
              <CaseCard key = {index} tempcase ={tempcase}/>
            )
          }
    </div>
  )
}

export default Cases
 