import { useState } from "react";
import { useDispatch } from "react-redux";

import {addNewCase } from "../../features/case/casesSlices";



const AddCase = () => {
    const dispatch = useDispatch()
    
    const [title, setTitle] = useState('')
    const [caseDescription, setCaseDescription] = useState('')
    const [ceatedAt, setCeatedAt] = useState('')
    
    
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const ontitleChanged = e => setTitle(e.target.value)
    const oncaseDescriptionChanged = e => setCaseDescription(e.target.value)
    const oncreatedAtChanged =(e)=>setCeatedAt(e.target.value)
    
    
    /* const checkInput = Boolean(title) && Boolean(content) && Boolean(userId) */
    const checkInput =[title ,caseDescription].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = () => {
        if (checkInput) {
            try{
              
                setAddRequestStatus('pending')
                dispatch( addNewCase({title, caseDescription,ceatedAt}))
                    setTitle('')
                    setCaseDescription('') 
                  
            }
            catch(err)
            {
                console.log('Failed to save the case' ,err)
            }
            finally
            {
                setAddRequestStatus('idle')
            }
           
          
        }
    }

    function handleClick(myLink){
        window.location.href=myLink;
      }
  

    return (
        <article>
                        <h2>Add a New Case</h2>
            <form>
              
              
                <label htmlFor="postContent">Title:</label>
                <input
                    id="postContent"
                    name="postContent"
                    value={title}
                    onChange={ontitleChanged}
                />
             
                <label htmlFor="postContent">Case Description:</label>
                <input
                    id="postContent"
                    name="postContent"
                    value={caseDescription}

                    onChange={oncaseDescriptionChanged}
                />
            <label htmlFor="postContent">Case Created At:</label>
                 <input type="date" id="start" name="trip-start"
                   value={ceatedAt}
                    min="2022-11-01" max="2025-12-31"
                    onChange={oncreatedAtChanged}
                    >

                 </input>
                <button
                  className="btn btn-dark"
                    type="button"
                    onClick={onSavePostClicked}
                    disabled = {!checkInput}
                >Save Case</button>
            </form>
            <form>
            <button
                  className="btn btn-dark m-4"
                    type="button"
                    onClick={()=>handleClick('/modifiy-case')}
                   
                > Asign Case to User </button>
            </form>
           
      
        </article>
       

    )
}

export default AddCase;