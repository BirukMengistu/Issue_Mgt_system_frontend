import React from 'react'
import {sub} from 'date-fns'
//import {selectAllAssginCases} from '../../features/case/casestatusSlices'
//import { useSelector } from 'react-redux';


export const CaseCard = ({tempcase}) => {

  const newdate = new Date(tempcase.ceatedAt);
  const date = sub(newdate, { minutes: 5 }).toDateString()
 // const assignCases = useSelector(selectAllAssginCases)
 // const assgin = assignCases.filter(Acase => Acase.id === tempcase.id)
 
 
 
  return ( 
    <tr>
      <td> {tempcase.title}</td>
       <td> {date}</td>
    <td>{tempcase.caseDescription}</td>
    </tr>
    )
} 


