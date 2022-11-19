import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {assignNewCaseUser} from "../../features/case/casestatusSlices";
import { selectAllCases   } from "../../features/case/casesSlices";
import  { selectAllUsers} from "../../features/user/usersSlices";

const AssignCase =() =>{
    const dispatch =useDispatch()
    const status_enum = [1,2]
    const users = useSelector(selectAllUsers)
    const cases = useSelector(selectAllCases)
    const CaseOptions = cases.map((tempcase, index) => (
        <option key={index} value={tempcase.id}>
            {tempcase.id}
        </option>
    ))
    
    const statu_value= status_enum.map(( tempuser, index) => (
        <option key={index} value={tempuser}>
            {tempuser}
        </option>))

    const usersOptions = users.map((tempuser, index) => (
        <option key={index} value={tempuser.id}>
            {tempuser.id}
        </option>
    ))
     
    const [userId, setUserId] = useState('')
    const [caseId , setCaseId ] = useState('')
    const [status , setStatus ] = useState('')
    const [modified, setModified] = useState('')
    const [created, setCreated] = useState('')
    

    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const onuserIdChanged =(e) => setUserId(e.target.value)
    const oncaseIdChanged = (e) => setCaseId(e.target.value)
    const onstatusChanged =(e)=>setStatus(e.target.value)
    const oncreatedAtChanged =(e)=>setCreated(e.target.value)
    const onmodifiedChanged =(e)=>setModified(e.target.value)


    const checkInput =[userId,caseId,status, modified ,created].every(Boolean) && addRequestStatus === 'idle'

    const onUpdateClicked = (event) => {
        event.preventDefault()
       
        if (checkInput) {
            try{
               const params={
                userId:Number(userId),
                caseId:Number(caseId),
                status:Number(status),
                modified:modified,
                created:created
               }
                setAddRequestStatus('pending')
                dispatch(assignNewCaseUser(params))
                    setUserId('')
                    setCaseId('')
                    setStatus('') 
                    setModified('')
                    setCreated('')
                  
            }
            catch(err)
            {
                console.log('Failed to save the case update' ,err)
            }
            finally
            {
                setAddRequestStatus('idle')
            }
           
          
        }
    }

    return (
        <article>
            
            <h2>Add a New Case</h2>
            <form >
                           
               <label htmlFor="postContent">User Id:</label>
                    <select id="post " value={userId} onChange={onuserIdChanged}>
                   <option value='' onKeyDown={(e) => e.preventDefault()}></option>
                   {usersOptions}
                </select>  

                <label htmlFor="postContent">Case Id:</label>
                    <select id="userAddress " value={caseId} onChange={oncaseIdChanged}>
                   <option value=''
                    onKeyDown={(e) => e.preventDefault()}></option>
                   {CaseOptions}
                  </select> 

                <label htmlFor="postContent">Case Status:</label>
                    <select id="userAddress " value={status} onChange={onstatusChanged}>
                   <option value=''
                    onKeyDown={(e) => e.preventDefault()}></option>
                 
                   {statu_value}
                </select>  
             
                <label htmlFor="postContent">Case Modified At:</label>
                 <input type="date" id="start" name="trip-start"
                   value={modified}
                   onKeyDown={(e) => e.preventDefault()}
                    min="2022-11-01" max="2025-12-31"
                    onChange={onmodifiedChanged}
                    ></input>

            <label htmlFor="postContent">Case Created At:</label>
                 <input type="date" id="start" name="trip-start"
                   value={created}
                   onKeyDown={(e) => e.preventDefault()}
                    min="2022-11-01" max="2025-12-31"
                    onChange={oncreatedAtChanged}
                    >

                 </input>
                <button
                  className="btn btn-dark"
                    type="button"
                    onClick={onUpdateClicked}
                    disabled = {!checkInput}
                >Update Case </button>
            </form>
           
        </article>
        
      
    )
}

export default AssignCase;