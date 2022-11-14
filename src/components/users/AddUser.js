import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addNewUser } from "../../features/user/usersSlices";
import { selectAllUsers } from "../../features/user/usersSlices";
import {selectAllAddress} from '../../features/user/addressSlices'

const AddUser = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const addresses = useSelector(selectAllAddress)
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [addressId, setAddressId] = useState('')
    
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const onemailChanged = e => setEmail(e.target.value)
    //const onaddressIdChanged = e => setAddressId(e.target.value)
    const onfirstNameChanged = e => setFirstName(e.target.value)
    const onsecondNameChanged = e => setSecondName(e.target.value)
    const onaddressIdChanged = e => setAddressId(e.target.value)
    
    /* const checkInput = Boolean(title) && Boolean(content) && Boolean(userId) */
    const checkInput =[email ,secondName ,firstName ,addressId].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = () => {
        if (checkInput) {
            try{
                setAddRequestStatus('pending')
                dispatch( addNewUser({email ,secondName ,firstName ,addressId}))
                    setFirstName('')
                    setSecondName('') 
                    setEmail('') 
                    setAddressId('')
            }
            catch(err)
            {
                console.log('Failed to save the User' ,err)
            }
            finally
            {
                setAddRequestStatus('idle')
            }
           
          
        }
    }
  
    const usersOptions = addresses.map((address, index) => (
        <option key={index} value={address.id}>
            {address.id}
        </option>
    ))

    return (
        <section className="border m-4 text-center p-4 shadow">
            <h2>Add a New User</h2>
            <form>
                <label htmlFor="postTitle">FirstName:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={firstName}
                    onChange={onfirstNameChanged}
                />
                
              
                <label htmlFor="postContent">SecondName:</label>
                <input
                    id="postContent"
                    name="postContent"
                    value={secondName}

                    onChange={onsecondNameChanged}
                />
                 <label htmlFor="postContent">Address:</label>
                    <select id="userAddress " value={addressId} onChange={onaddressIdChanged}>
                   <option value=''></option>
                   {usersOptions}
                </select>  
            
                 <label htmlFor="postContent">Email:</label>
                <input
                    id="postContent"
                    name="postContent"
                    value={email}

                    onChange={onemailChanged}
                />
                 
                <button
                  className="btn btn-dark"
                    type="button"
                    onClick={onSavePostClicked}
                    disabled = {!checkInput}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddUser;